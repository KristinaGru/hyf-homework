const input = document.querySelector('input');
const btn = document.querySelector('button');
const display = document.getElementById('display');

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

function saveScreenshot(url) {
  const btn = document.createElement('button');
  btn.type = 'button';
  btn.innerText = 'Save Screenshot';
  display.appendChild(btn);
  btn.addEventListener('click', async () => {
    const screenshot = {
      'url': url
    };
    try {
      const res = await fetch(
        `https://crudcrud.com/api/${crudKey}/screenshots`,
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
  const btn = document.createElement('button');
  btn.type = 'button';
  btn.innerText = 'Show saved screenshots';
  display.appendChild(btn);
  const dataEl = document.createElement('div');
  btn.addEventListener('click', async () => {
    try {
      const res = await fetch(
        `https://crudcrud.com/api/${crudKey}/screenshots`
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
      const res = await fetch(
        `https://crudcrud.com/api/${crudKey}/screenshots/${id}`,
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
  saveScreenshot(data);
  getScreenshots();
});
