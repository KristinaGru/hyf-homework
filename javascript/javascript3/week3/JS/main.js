const input = document.getElementById('get-input');
const btn = document.getElementById('get-btn');
const display = document.getElementById('display');
const userName = document.getElementById('login-name');
const imgWrap = document.getElementById('img');
let logedIn = false;

async function getScreenshot(url) {
  const encodedurl = encodeURIComponent(url);
  const APIurl = `https://website-screenshot6.p.rapidapi.com/screenshot?url=${encodedurl}&width=1920&height=1080&fullscreen=true`;
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': screenshotKey,
      'X-RapidAPI-Host': 'website-screenshot6.p.rapidapi.com'
    }
  };
  try {
    const response = await fetch(APIurl, options);
    const result = await response.json();
    console.log(response.status);
    if (response.status === 422 || response.status === 404) {
      alert('Please enter a valid url');
    } else if (response.status >= 400) {
      throw new Error();
    }
    return result;
  } catch (error) {
    alert('Something went wrong. Please try again');
    console.error(error);
  }
}

function createBtn(text, appendTo) {
  const btn = document.createElement('button');
  btn.type = 'button';
  btn.innerText = text;
  appendTo.appendChild(btn);
  return btn;
}

function saveScreenshot(url) {
  const btn = createBtn('Save Screenshot', imgWrap);
  btn.addEventListener('click', async () => {
    const screenshot = { 'url': url };
    try {
      await fetch(
        `https://crudcrud.com/api/${crudKey}/screenshots-${userName.value}`,
        {
          headers: { 'Content-Type': 'application/json; charset=utf-8' },
          method: 'POST',
          body: JSON.stringify(screenshot)
        }
      );
      alert('Screenshot saved');
    } catch (err) {
      console.error(err);
    }
  });
}

function getScreenshots() {
  const btn = createBtn('Show saved screenshots', display);
  const screenshots = document.createElement('div');
  screenshots.classList.add('screenshots');
  btn.addEventListener('click', async () => {
    try {
      const res = await fetch(
        `https://crudcrud.com/api/${crudKey}/screenshots-${userName.value}`
      );
      const data = await res.json();
      screenshots.innerText = '';
      data.forEach((element) => {
        const wrap = document.createElement('div');
        wrap.classList.add('save');
        const link = document.createElement('a');
        const item = document.createElement('img');
        item.src = element.url;
        link.href = element.url;
        link.target = '_blank';
        link.appendChild(item);
        wrap.appendChild(link);
        deleteScreenshot(wrap, element._id);
        screenshots.appendChild(wrap);
      });
      display.appendChild(screenshots);
    } catch (err) {
      console.error(err);
    }
  });
}

function deleteScreenshot(el, id) {
  const btn = document.createElement('button');
  btn.type = 'button';
  btn.innerText = '🗑️';
  btn.classList.add('delete');
  el.appendChild(btn);
  btn.addEventListener('click', async () => {
    try {
      await fetch(
        `https://crudcrud.com/api/${crudKey}/screenshots-${userName.value}/${id}`,
        {
          method: 'DELETE'
        }
      );
      el.remove();
    } catch (err) {
      console.error(err);
    }
  });
}

function displayScreenshot(url) {
  const img = document.createElement('img');
  const link = document.createElement('a');
  imgWrap.innerText = '';
  link.href = url;
  link.setAttribute('download', '');
  img.src = url;
  link.appendChild(img);
  imgWrap.appendChild(link);
}

btn.addEventListener('click', async () => {
  const loading = document.createElement('img');
  loading.src =
    'https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif';
  loading.classList.add('background');
  imgWrap.appendChild(loading);
  const data = (await getScreenshot(input.value)).screenshotUrl;
  displayScreenshot(data);
  if (logedIn) {
    saveScreenshot(data);
  }
});

// Signup & login

const loginForm = document.getElementById('login-form');
const singupForm = document.getElementById('signup-form');
const loginBtn = document.getElementById('show-login');
const signupBtn = document.getElementById('show-signup');

function showForm(form, closeId, closeForm) {
  closeForm.hidden = true;
  form.hidden = false;
  document
    .getElementById(closeId)
    .addEventListener('click', () => (form.hidden = true));
}

signupBtn.addEventListener('click', () => {
  showForm(singupForm, 'close-signup', loginForm);
});

loginBtn.addEventListener('click', () => {
  showForm(loginForm, 'close-login', singupForm);
});

document.getElementById('signup').addEventListener('click', async () => {
  const userName = document.getElementById('signup-name').value;
  const userPwd = document.getElementById('signup-pwd').value;
  if (userName && userPwd) {
    const user = {
      'name': userName,
      'pwd': userPwd
    };
    try {
      await fetch(`https://crudcrud.com/api/${crudKey}/users`, {
        headers: { 'Content-Type': 'application/json; charset=utf-8' },
        method: 'POST',
        body: JSON.stringify(user)
      });
      singupForm.hidden = true;
      alert('Successfully signed up. Please log in');
    } catch (err) {
      console.error(err);
    }
  } else {
    alert('Fill in username and password fields');
  }
});

document.getElementById('login').addEventListener('click', async () => {
  const userPwd = document.getElementById('login-pwd').value;
  if (userName && userPwd) {
    try {
      const res = await fetch(`https://crudcrud.com/api/${crudKey}/users`);
      const data = await res.json();
      data.forEach((element) => {
        if (element.name === userName.value && element.pwd === userPwd) {
          logedIn = true;
          getScreenshots();
          loginForm.hidden = true;
          loginBtn.hidden = true;
          signupBtn.hidden = true;
          alert('Successfully logged in');
          const logOut = document.getElementById('log-out');
          logOut.hidden = false;
          logOut.addEventListener('click', () => location.reload());
        } else {
          alert('Incorrect user name or password');
        }
      });
    } catch (err) {
      console.error(err);
    }
  } else {
    alert('Fill in username and password fields');
  }
});
