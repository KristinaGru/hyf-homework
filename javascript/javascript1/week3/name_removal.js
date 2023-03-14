const names = [
  'Peter',
  'Ahmad',
  'Yana',
  'kristina',
  'Rasmus',
  'Samuel',
  'katrine',
  'Tala',
];
const nameToRemove = 'Ahmad';

// Write some code here

function removeFromArray(arr, item) {
  const index = arr.indexOf(item);
  arr.splice(index, 1);
}

removeFromArray(names, nameToRemove);

// Code done

console.log(names); // ['Peter', 'Yana', 'kristina', 'Rasmus', 'Samuel', 'katrine', 'Tala']
