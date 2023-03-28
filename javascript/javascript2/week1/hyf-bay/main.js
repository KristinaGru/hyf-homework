console.log('Script loaded');

const products = getAvailableProducts();
console.log(products);

const main = document.querySelector('main');

function renderProducts(productArr) {
  const list = document.createElement('ul');
  for (const product of productArr) {
    const listItem = document.createElement('li');
    const itemTitle = document.createElement('h2');
    const itemPrice = document.createElement('div');
    const itemRating = document.createElement('div');
    itemTitle.innerText = product.name;
    itemPrice.innerText = `price: ${product.price}`;
    itemRating.innerText = `rating: ${product.rating}`;
    listItem.appendChild(itemTitle);
    listItem.appendChild(itemPrice);
    listItem.appendChild(itemRating);
    list.appendChild(listItem);
  }
  main.appendChild(list);
}

renderProducts(products);
