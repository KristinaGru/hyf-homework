const boughtCandyPrices = [];

function addCandy(candyType, candyWeight) {
  switch (candyType) {
    case 'sweet':
      boughtCandyPrices.push(candyWeight * 0.5);
      break;
    case 'chocolate':
      boughtCandyPrices.push(candyWeight * 0.7);
      break;
    case 'toffee':
      boughtCandyPrices.push(candyWeight * 1.1);
      break;
    case 'chewing - gum':
      boughtCandyPrices.push(candyWeight * 0.03);
      break;
    default:
      console.log('No such candy type');
      break;
  }
}

let amountToSpend = Math.random() * 100;
amountToSpend = Math.round(amountToSpend * 100) / 100;

function canBuyMoreCandy(prices) {
  let i = 0;
  let sum = 0;
  while (i < prices.length) {
    sum += prices[i];
    i++;
  }
  if (sum < amountToSpend) {
    return 'You can buy more, so please do!';
  } else {
    return 'Enough candy for you!';
  }
}

window.onload = () => {
  const paragraph = document.getElementById('spend');
  paragraph.textContent = ` You can spend ${amountToSpend} DKK`;
};

const candyButton = document.getElementById('candy-btn');

candyButton.addEventListener('click', () => {
  const container = document.getElementById('candy');
  const candy = document.querySelector('input[name="candy"]:checked').value;
  const weight = +document.getElementById('candy-weight').value;
  addCandy(candy, weight);
  const buyMore = document.createElement('div');
  buyMore.textContent = canBuyMoreCandy(boughtCandyPrices);
  container.appendChild(buyMore);
});
