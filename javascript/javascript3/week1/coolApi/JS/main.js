window.onload = async () => {
  const getData = async (path) =>
    await (await fetch('https://api.chucknorris.io/jokes/' + path)).json();

  const randomJson = await getData('random');
  // A json gotten from this API consist of keys with values such as strings, an array and an object
  // The array and the object also contain various different types of values

  const random = document.getElementById('random');
  random.innerText = `Getting a random fact by fetching API and selecting 'value' key from json: ${randomJson.value}`;

  const categories = await getData('categories');

  const listHeader = document.querySelector('h3');
  const list = document.querySelector('ul');

  listHeader.innerText =
    'Can also get a random fact from one of these categories:';
  categories.forEach((category) => {
    const item = document.createElement('li');
    item.innerText = category;
    list.appendChild(item);
  });

  const devJson = await getData('random?category=dev');

  const dev = document.getElementById('category');
  dev.innerText = `Getting a random fact by fetching API with selected dev category and selecting 'value' key from json: ${devJson.value}`;

  const homeworkJson = await getData('search?query=homework');

  const homeworkHeader = document.getElementById('hw-header');
  homeworkHeader.innerText =
    'Can also get all facts with specified keyword, like "homework":';
  const homeworkList = document.getElementById('hw-list');
  homeworkJson.result.forEach((result) => {
    const item = document.createElement('li');
    item.innerText = result.value;
    homeworkList.appendChild(item);
  });
};
