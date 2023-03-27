const animalAdjective = [
  'crying',
  'caring',
  'thoughtful',
  'beautiful',
  'classy',
  'graceful',
  'friendly',
  'precious',
  'gentle',
  'charming',
];

const animalNoun = [
  'butterfly',
  'panda',
  'tiger',
  'rabbit',
  'pig',
  'monkey',
  'koala',
  'penguin',
  'cat',
  'dog',
];

function getSpiritAnimal(adjective, noun) {
  return `${adjective[Math.floor(Math.random() * adjective.length)]} ${
    noun[Math.floor(Math.random() * noun.length)]
  }`;
}

function generateSpiritAnimal() {
  const name = document.getElementById('name').value;
  const spiritAnimalName = getSpiritAnimal(animalAdjective, animalNoun);
  if (name) {
    nameBtn.innerText = 'Generate new spirit animal name';
    spiritAnimalParagraph.innerText = `${name} - The ${spiritAnimalName}`;
  } else {
    spiritAnimalParagraph.innerText = `Please enter your name`;
  }
  spiritAnimalSection.appendChild(spiritAnimalParagraph);
}

const spiritAnimalSection = document.getElementById('spirit-animal');
const spiritAnimalParagraph = document.createElement('p');
const nameBtn = document.getElementById('name-btn');

nameBtn.addEventListener('click', generateSpiritAnimal);
