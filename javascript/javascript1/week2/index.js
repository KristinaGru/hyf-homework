// Event application
// Weather wear

function getClothesSuggestion(temp) {
  if (temp < -20 || temp > 30) {
    return 'Just stay inside';
  } else if (temp < 0) {
    return 'Wear a winter coat';
  } else if (temp < 10) {
    return 'Wear a jacket';
  } else if (temp < 20) {
    return 'Wear a sweater';
  } else if (temp <= 30) {
    return 'Wear a dress';
  }
}

console.log(getClothesSuggestion(-19));

// Student manager

const class07Students = [];

function addStudentToClass(studentName, array) {
  if (!array.includes(studentName)) {
    if (studentName === '' || typeof studentName != 'string') {
      console.log('Please enter a valid name');
    } else if (studentName === 'queen' || array.length < 6) {
      array.push(studentName);
    } else {
      console.log('Cannot add more students to class 07');
    }
  }
}

function getNumberOfStudents(array) {
  return array.length;
}

addStudentToClass('Bill', class07Students);
addStudentToClass('queen', class07Students);
console.log(class07Students);
console.log(getNumberOfStudents(class07Students));

// Candy helper

const boughtCandyPrices = [];

function addCandy(candyType, weight) {
  switch (candyType) {
    case 'sweet':
      boughtCandyPrices.push(weight * 0.5);
      break;
    case 'chocolate':
      boughtCandyPrices.push(weight * 0.7);
      break;
    case 'toffee':
      boughtCandyPrices.push(weight * 1.1);
      break;
    case 'chewing - gum':
      boughtCandyPrices.push(weight * 0.03);
      break;
    default:
      console.log('No such candy type');
      break;
  }
}

const amountToSpend = Math.random() * 100;

function canBuyMoreCandy(prices) {
  let i = 0;
  let sum = 0;
  while (i < prices.length) {
    sum += prices[i];
    i++;
  }
  if (sum < amountToSpend) {
    console.log('You can buy more, so please do!');
  } else {
    console.log('Enough candy for you!');
  }
}

addCandy('toffee', 50);
canBuyMoreCandy(boughtCandyPrices);
