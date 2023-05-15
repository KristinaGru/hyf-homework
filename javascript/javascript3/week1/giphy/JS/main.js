window.onload = async () => {
  const searchInput = document.getElementById('search');
  const limitInput = document.getElementById('limit');
  const btn = document.querySelector('button');
  const gifs = document.getElementById('gifs');

  async function fetchGifs(search, limit = 25) {
    return (
      await fetch(
        `https://api.giphy.com/v1/gifs/search?api_key=xBXFx403moeACgBev84LzPNkngJUUOLT&q=${search}&limit=${limit}&offset=0&rating=g&lang=en`
      )
    ).json();
  }

  function renderGifs(json) {
    gifs.innerText = '';
    const data = json.data;
    data.forEach((element) => {
      const imgDiv = document.createElement('div');
      imgDiv.classList.add('gif');
      const img = document.createElement('img');
      img.src = element.images.original.url;
      imgDiv.appendChild(img);
      gifs.appendChild(imgDiv);
    });
  }

  btn.addEventListener('click', async () => {
    const gifJson = await fetchGifs(searchInput.value);
    renderGifs(gifJson);
    limitInput.addEventListener('input', async () => {
      if (limitInput.value) {
        const gifJson = await fetchGifs(searchInput.value, +limitInput.value);
        renderGifs(gifJson);
      }
    });
  });
};
