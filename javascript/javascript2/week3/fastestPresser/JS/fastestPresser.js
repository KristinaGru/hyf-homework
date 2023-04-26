const btn = document.querySelector('button');
const playerOne = document.getElementById('player-one');
const playerTwo = document.getElementById('player-two');
const winner1 = document.querySelector('.canvas1');
const winner2 = document.querySelector('.canvas2');
const gameSection1 = document.querySelector('.game-section');
const gameSection2 = document.querySelector('.game-section:nth-child(2)');
let sScore = 0;
let lScore = 0;

function keepScore(e) {
  switch (e.key) {
    case 's':
      sScore++;
      break;
    case 'l':
      lScore++;
      break;
  }
  playerOne.innerText = sScore;
  playerTwo.innerText = lScore;
}

function renderConfetti(id) {
  const confettiSettings = { target: id };
  const confetti = new ConfettiGenerator(confettiSettings);
  confetti.render();
}

function checkWinner(firstScore, secondScore) {
  if (firstScore > secondScore) {
    winner1.id = 'my-canvas1';
    renderConfetti(winner1.id);
    gameSection1.classList.remove('overlay');
    playerOne.innerText = 'You Win!';
    playerTwo.innerText = 'You Lose!';
  } else if (secondScore > firstScore) {
    winner2.id = 'my-canvas2';
    renderConfetti(winner2.id);
    gameSection2.classList.remove('overlay');
    playerTwo.innerText = 'You Win!';
    playerOne.innerText = 'You Lose!';
  } else {
    playerOne.innerText = "It's a Tie!";
    playerTwo.innerText = "It's a Tie!";
  }
}

function setTimer(time, timer) {
  setInterval(() => {
    if (time === 1) {
      timer.innerText = 'Time is up!';
    } else if (time > 1) {
      timer.innerText = `Game ends in ${time - 1} seconds`;
    } else if (time === '') {
      timer.innerText = 'Set a time in seconds!';
    }
    time--;
  }, 1000);
}

btn.addEventListener('click', () => {
  gameSection1.classList.add('overlay');
  gameSection2.classList.add('overlay');
  sScore = 0;
  lScore = 0;
  playerOne.innerText = sScore;
  playerTwo.innerText = lScore;
  btn.innerText = 'Start over!';
  const gameTime = document.querySelector('input').value;
  const timer = document.getElementById('timer');
  timer.innerText = `Game ends in ${gameTime} seconds`;
  setTimer(gameTime, timer);
  window.addEventListener('keydown', keepScore);
  setTimeout(() => {
    window.removeEventListener('keydown', keepScore);
    checkWinner(sScore, lScore);
    console.log(sScore, lScore);
  }, gameTime * 1000);
});
