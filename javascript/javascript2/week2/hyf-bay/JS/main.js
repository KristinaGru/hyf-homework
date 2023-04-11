console.log('Script loaded');

const products = getAvailableProducts();
console.log(products);

const main = document.querySelector('main');
function renderProducts(productArr) {
  const list = document.createElement('ul');
  for (const product of productArr) {
    const listItem = document.createElement('li');
    const productDiv = document.createElement('div');
    const itemPic = document.createElement('img');
    const itemButton = document.createElement('button');
    const itemTitle = document.createElement('h2');
    const itemPrice = document.createElement('div');
    const itemRating = document.createElement('div');
    productDiv.classList.add('product-img');
    itemPic.src = `https://picsum.photos/300?random=${
      Math.floor(Math.random() * 100) + 1
    }`;
    itemPic.alt = 'random picture';
    itemButton.type = 'button';
    itemButton.innerText = 'Out Of Stock';
    itemTitle.innerText = product.name;
    itemPrice.innerText = `price: ${product.price}`;
    itemRating.innerText = `rating: ${product.rating}`;
    productDiv.appendChild(itemPic);
    productDiv.appendChild(itemButton);
    listItem.appendChild(productDiv);
    listItem.appendChild(itemTitle);
    listItem.appendChild(itemPrice);
    listItem.appendChild(itemRating);
    list.appendChild(listItem);
  }
  main.appendChild(list);
}

renderProducts(products);
