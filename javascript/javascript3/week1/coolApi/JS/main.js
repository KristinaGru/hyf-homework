window.onload = async () => {
  const randomJson = await (
    await fetch('https://api.chucknorris.io/jokes/random')
  ).json();
  // A json gotten from this API consist of keys with values such as strings, an array and an object
  // The array and the object also contain various different types of values

  const random = document.createElement('div');
  random.innerText = `Getting a random fact by fetching API and selecting 'value' key from json: ${randomJson.value}`;
  document.body.appendChild(random);

  const categories = await (
    await fetch('https://api.chucknorris.io/jokes/categories')
  ).json();

  const listHeader = document.createElement('h3');
  const list = document.createElement('ul');

  listHeader.innerText =
    'Can also get a random fact from one of these categories:';
  categories.forEach((category) => {
    const item = document.createElement('li');
    item.innerText = category;
    list.appendChild(item);
  });

  document.body.appendChild(listHeader);
  document.body.appendChild(list);

  const devJson = await (
    await fetch('https://api.chucknorris.io/jokes/random?category=dev')
  ).json();

  const dev = document.createElement('div');
  dev.innerText = `Getting a random fact by fetching API with selected dev category and selecting 'value' key from json: ${devJson.value}`;
  document.body.appendChild(dev);

  const homeworkJson = await (
    await fetch('https://api.chucknorris.io/jokes/search?query=homework')
  ).json();

  const homeworkHeader = document.createElement('h3');
  homeworkHeader.innerText =
    'Can also get all facts with specified keyword, like "homework":';
  const homeworkList = document.createElement('ul');
  homeworkJson.result.forEach((result) => {
    const item = document.createElement('li');
    item.innerText = result.value;
    homeworkList.appendChild(item);
  });
  document.body.appendChild(homeworkHeader);
  document.body.appendChild(homeworkList);
};
