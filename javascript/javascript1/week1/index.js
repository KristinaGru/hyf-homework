// Javascript warm up part one

const myProfile = 'https://www.freecodecamp.org/kristinagru';
console.log('Here is a link to my freecodecamp profile: ' + myProfile);

// Age-ify (A future age calculator)

const yearOfBirth = 1996;
const yearFuture = 2027;
const age = yearFuture - yearOfBirth;

console.log('You will be ' + age + ' years old in ' + yearFuture);

// Goodboy-Oldboy (A dog age calculator)

const dogYearOfBirth = prompt('What is your dogs year of birth?');
const dogYearFuture = 2027;
const dogYears = dogYearFuture - dogYearOfBirth;
const shouldShowResultInDogYears = prompt(
  'Would you like the result to be shown in dog years? Type either "Yes" or "No"'
).toLowerCase();

if (shouldShowResultInDogYears === 'yes') {
  console.log(
    'Your dog will be ' + dogYears * 7 + ' dog years old in ' + dogYearFuture
  );
} else if (shouldShowResultInDogYears === 'no') {
  console.log(
    'Your dog will be ' + dogYears + ' human years old in ' + dogYearFuture
  );
} else {
  console.log('Input invalid');
}
