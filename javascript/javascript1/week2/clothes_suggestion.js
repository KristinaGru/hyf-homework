function getClothesSuggestion(temp) {
  if (temp < -20 || temp > 30) {
    return 'just stay inside';
  } else if (temp < 0) {
    return 'wear a winter coat';
  } else if (temp < 10) {
    return 'wear a jacket';
  } else if (temp < 20) {
    return 'wear a sweater';
  } else if (temp <= 30) {
    return 'wear a dress';
  }
}

console.log(getClothesSuggestion(-19));

const tempButton = document.getElementById('temp-btn');

tempButton.addEventListener('click', () => {
  const paragraph = document.getElementById('temp-paragraph');
  const temperature = +document.getElementById('temperature').value;
  const clothesSuggestion = getClothesSuggestion(temperature);
  paragraph.textContent = `You should ${clothesSuggestion}`;
});
