const input = document.getElementById('get-input');
const btn = document.getElementById('get-btn');
const display = document.getElementById('display');
const userName = document.getElementById('login-name');
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
    return result;
  } catch (error) {
    console.error(error);
  }
}

function createBtn(text) {
  const btn = document.createElement('button');
  btn.type = 'button';
  btn.innerText = text;
  display.appendChild(btn);
  return btn;
}

function saveScreenshot(url) {
  const btn = createBtn('Save Screenshot');
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
    } catch (err) {
      console.error(err);
    }
  });
}

function getScreenshots() {
  const btn = createBtn('Show saved screenshots');
  const dataEl = document.createElement('div');
  btn.addEventListener('click', async () => {
    try {
      const res = await fetch(
        `https://crudcrud.com/api/${crudKey}/screenshots-${userName.value}`
      );
      const data = await res.json();
      dataEl.innerText = '';
      data.forEach((element) => {
        const wrap = document.createElement('div');
        wrap.classList.add('save');
        const item = document.createElement('img');
        item.src = element.url;
        wrap.appendChild(item);
        deleteScreenshot(wrap, element._id);
        dataEl.appendChild(wrap);
      });
      display.appendChild(dataEl);
    } catch (err) {
      console.error(err);
    }
  });
}

function deleteScreenshot(el, id) {
  const btn = document.createElement('button');
  btn.type = 'button';
  btn.innerText = '🗑️';
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
  const urlEl = document.createElement('a');
  const imgWrap = document.getElementById('img');
  display.innerText = '';
  imgWrap.innerText = '';
  urlEl.href = url;
  urlEl.innerText = 'Image link';
  img.src = url;
  imgWrap.appendChild(img);
  display.appendChild(urlEl);
}

btn.addEventListener('click', async () => {
  const data = (await getScreenshot(input.value)).screenshotUrl;
  displayScreenshot(data);
  if (logedIn) {
    saveScreenshot(data);
    getScreenshots();
  }
});

function showForm(formId, closeId) {
  const form = document.getElementById(formId);
  form.hidden = false;
  document
    .getElementById(closeId)
    .addEventListener('click', () => (form.hidden = true));
}

document.getElementById('show-signup').addEventListener('click', () => {
  showForm('signup-form', 'close-signup');
});

document.getElementById('show-login').addEventListener('click', () => {
  showForm('login-form', 'close-login');
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
      const res = await fetch(`https://crudcrud.com/api/${crudKey}/users`, {
        headers: { 'Content-Type': 'application/json; charset=utf-8' },
        method: 'POST',
        body: JSON.stringify(user)
      });
      const data = await res.json();
      console.log(data);
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
      console.log(data);
      data.forEach((element) => {
        if (element.name === userName.value && element.pwd === userPwd) {
          logedIn = true;
        }
      });
    } catch (err) {
      console.error(err);
    }
  } else {
    alert('Fill in username and password fields');
  }
});
