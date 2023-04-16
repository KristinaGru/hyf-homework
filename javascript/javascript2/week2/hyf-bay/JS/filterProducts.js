const searchInput = document.getElementById('search');

searchInput.addEventListener('input', () => {
  main.innerText = '';
  renderProducts(
    products.filter((product) =>
      product.name.toLowerCase().includes(searchInput.value.toLowerCase())
    )
  );
});

const priceInput = document.getElementById('price');

priceInput.addEventListener('input', () => {
  main.innerText = '';
  renderProducts(
    products.filter((product) => product.price <= priceInput.value)
  );
  if (!priceInput.value) {
    renderProducts(products);
  }
});

const ratingInput = document.getElementById('rating');

ratingInput.addEventListener('input', () => {
  main.innerText = '';
  renderProducts(
    products.filter((product) => product.rating >= ratingInput.value)
  );
  if (!ratingInput.value) {
    renderProducts(products);
  }
});

function sortProducts(value) {
  if (value === 'top-rated') {
    main.innerText = '';
    renderProducts(products.sort((a, b) => b.rating - a.rating));
  } else if (value === 'alphabetical') {
    main.innerText = '';
    renderProducts(products.sort((a, b) => a.name.localeCompare(b.name)));
  } else if (value === 'price-up') {
    main.innerText = '';
    renderProducts(products.sort((a, b) => a.price - b.price));
  } else if (value === 'price-down') {
    main.innerText = '';
    renderProducts(products.sort((a, b) => b.price - a.price));
  }
}

const sort = document.getElementById('sort');
sort.addEventListener('change', () => sortProducts(sort.value));
