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

const formal1 = document.getElementById('formal');
formal1.addEventListener('click', () => {
  const radio = document.querySelector('.radios');
  if (formal1.checked) {
    radio.innerHTML =
      "<input type='radio' name='gender1' value='female' checked />Female <input type='radio' name='gender1' value='male' />Male ";
  } else {
    radio.innerHTML = '';
  }
});

const formal2 = document.getElementById('formal2');
formal2.addEventListener('click', () => {
  const radio1 = document.querySelectorAll('.radios')[1];
  if (formal2.checked) {
    radio1.innerHTML =
      "<input type='radio' name='gender2' value='female' checked />Female <input type='radio' name='gender2' value='male' />Male ";
  } else {
    radio1.innerHTML = '';
  }
});

const button = document.getElementById('btn');

button.addEventListener('click', () => {
  const name1 = document.getElementById('name1');
  const surname1 = document.getElementById('surname1');
  const gender1 = document.querySelector('input[name="gender1"]:checked');
  let fullname1;
  if (!gender1) {
    fullname1 = getFullName(name1.value, surname1.value);
  } else {
    fullname1 = getFullName(name1.value, surname1.value, gender1.value);
  }
  const name2 = document.getElementById('name2');
  const surname2 = document.getElementById('surname2');
  const gender2 = document.querySelector('input[name="gender2"]:checked');
  let fullname2;
  if (!gender2) {
    fullname2 = getFullName(name2.value, surname2.value);
  } else {
    fullname2 = getFullName(name2.value, surname2.value, gender2.value);
  }

  const paragraph = document.querySelector('p');
  if (typeof fullname1 !== 'undefined' && typeof fullname2 !== 'undefined') {
    paragraph.textContent = `Flight booked for ${fullname1} and ${fullname2}`;
  }
});
