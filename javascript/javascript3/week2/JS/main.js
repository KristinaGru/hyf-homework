let rates;
let currencies;
const exchanger = document.getElementById('exchanger');
const input = document.querySelector('input');
const currencyFrom = document.getElementById('from');
const currencyTo = document.getElementById('to');
const result = document.getElementById('result');

async function fetchRates() {
  return (await fetch('https://open.er-api.com/v6/latest/EUR')).json();
}

async function getRates() {
  try {
    rates = (await fetchRates()).rates;
    currencies = Object.keys(rates);
  } catch (err) {
    console.error(err);
  }
}

async function createDropdown(select, defaultCurrency) {
  currencies.forEach((currency) => {
    const option = document.createElement('option');
    option.innerText = currency;
    option.value = currency;
    if (currency === defaultCurrency) {
      option.selected = true;
    }
    select.appendChild(option);
  });
}

async function calculateCurrency() {
  const amount = +input.value;
  const from = currencyFrom.value;
  const to = currencyTo.value;
  const fromRate = rates[from];
  const toRate = rates[to];
  result.innerText = `${((amount * toRate) / fromRate).toFixed(2)} ${to}`;
}

(async () => {
  await getRates();
  createDropdown(currencyFrom, 'EUR');
  createDropdown(currencyTo, 'DKK');
})();

currencyFrom.addEventListener('change', calculateCurrency);
currencyTo.addEventListener('change', calculateCurrency);
input.addEventListener('input', calculateCurrency);
