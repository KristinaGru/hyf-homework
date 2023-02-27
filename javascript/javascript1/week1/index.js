// Javascript warm up part one

const myProfile = 'https://www.freecodecamp.org/kristinagru';
console.log('Here is a link to my freecodecamp profile: ' + myProfile);

// Age-ify (A future age calculator)

const yearOfBirth = 1996;
const yearFuture = 2027;
const age = yearFuture - yearOfBirth;

console.log('I will be ' + age + ' years old in ' + yearFuture);

// Goodboy-Oldboy (A dog age calculator)

const dogYearOfBirth = +prompt('What is your dogs year of birth?');
const dogYearFuture = 2027;
const dogYears = dogYearFuture - dogYearOfBirth;
const shouldShowResultInDogYears = prompt(
  'Would you like the result to be shown in dog years? Type either "Yes" or "No"'
).toLowerCase();

if (
  isNaN(dogYearOfBirth) ||
  dogYearOfBirth > 2023 ||
  dogYearOfBirth < 1990 ||
  dogYearOfBirth == null
) {
  console.log('Dogs birth year input invalid');
} else {
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
}

// Housey pricey (A house price estimator)

const petersHouseWidth = 8;
const petersHouseDepth = 10;
const petersHouseHeight = 10;
const petersHouseGarden = 100;
const petersHouseVolumeInMeters =
  petersHouseWidth * petersHouseDepth * petersHouseHeight;
const petersHouseWorth =
  petersHouseVolumeInMeters * 2.5 * 1000 + petersHouseGarden * 300;

if (petersHouseWorth > 2500000) {
  console.log('Peter is paying too little for his house');
} else if (petersHouseWorth < 2500000) {
  console.log('Peter is paying too much for his house');
} else {
  console.log('Peter is paying exactly how much the house is worth');
}

const juliasHouseWidth = 5;
const juliasHouseDepth = 11;
const juliasHouseHeight = 8;
const juliasHouseGarden = 70;
const juliasHouseVolumeInMeters =
  juliasHouseWidth * juliasHouseDepth * juliasHouseHeight;
const juliasHouseWorth =
  juliasHouseVolumeInMeters * 2.5 * 1000 + juliasHouseGarden * 300;

if (juliasHouseWorth > 1000000) {
  console.log('Julia is paying too little for her house');
} else if (juliasHouseWorth < 1000000) {
  console.log('Julia is paying too much for her house');
} else {
  console.log('Julia is paying exactly how much the house is worth');
}

// Ez Namey (Startup name generator)

const firstWords = [
  'Easy',
  'Awesome',
  'Charming',
  'Kind',
  'Excellent',
  'Fabulous',
  'Amazing',
  'Unique',
  'Incredible',
  'Stunning',
];

const secondWords = [
  'Corporate',
  'Company',
  'Enterprise',
  'Firm',
  'Agency',
  'Organization',
  'Institution',
  'Association',
  'Corp.',
  'Establishment',
];

const startupName =
  firstWords[Math.floor(Math.random() * 10)] +
  ' ' +
  secondWords[Math.floor(Math.random() * 10)];

console.log(
  `The startup: "${startupName}" contains ${startupName.length} characters`
);
