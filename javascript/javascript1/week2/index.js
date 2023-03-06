// Flight booking fullname function

function getFullName(firstName, surname, gender) {
  if (
    firstName === '' ||
    typeof firstName != 'string' ||
    surname === '' ||
    typeof surname != 'string'
  ) {
    alert('Enter a valid name and surname');
  } else if (gender === 'male') {
    return `Lord ${firstName} ${surname}`;
  } else if (gender === 'female') {
    return `Miss ${firstName} ${surname}`;
  } else {
    return `${firstName} ${surname}`;
  }
}

const button = document.getElementById('btn');

button.addEventListener('click', () => {
  const name1 = document.getElementById('name1');
  const surname1 = document.getElementById('surname1');
  const gender1 = document.querySelector('input[name="gender"]:checked');
  console.log(getFullName(name1.value, surname1.value, gender1.value));
});

const fullname1 = getFullName('John', 'Smith');
const fullname2 = getFullName('Jane', 'Doe', true, 'female');

console.log(fullname1);
console.log(fullname2);

// Event application

const dayOfWeek = new Date().getDay();

function getEventWeekday(day) {
  const weekday = (dayOfWeek + day) % 7;
  switch (weekday) {
    case 0:
      return 'Sunday';
      break;
    case 1:
      return 'Monday';
      break;
    case 2:
      return 'Tuesday';
      break;
    case 3:
      return 'Wednesday';
      break;
    case 4:
      return 'Thursday';
      break;
    case 5:
      return 'Friday';
      break;
    case 6:
      return 'Saturday';
      break;
  }
}

console.log(getEventWeekday(7));

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
