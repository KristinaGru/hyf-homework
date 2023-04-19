const btn = document.querySelector('button');
const playerOne = document.getElementById('player-one');
const playerTwo = document.getElementById('player-two');

let sScore = 0;
let lScore = 0;

function keepScore(e) {
  e.key === 's' ? sScore++ : e.key === 'l' ? lScore++ : null;
  playerOne.innerText = sScore;
  playerTwo.innerText = lScore;
}

function checkWinner(firstScore, secondScore) {
  if (firstScore > secondScore) {
    console.log('Player one wins');
  } else if (secondScore > firstScore) {
    console.log('Player two wins');
  } else {
    console.log("It's a tie");
  }
}

function setTimer(time, timer) {
  setInterval(() => {
    if (time <= 0) {
      timer.innerText = 'Time is up!';
    } else {
      timer.innerText = `Game ends in ${time - 1} seconds`;
    }
    time--;
  }, 1000);
}

btn.addEventListener('click', () => {
  sScore = 0;
  lScore = 0;
  playerOne.innerText = sScore;
  playerTwo.innerText = lScore;
  btn.innerText = 'Start over!';
  const gameTime = document.querySelector('input').value;
  const timer = document.getElementById('timer');
  setTimer(gameTime, timer);
  window.addEventListener('keydown', keepScore);
  setTimeout(() => {
    window.removeEventListener('keydown', keepScore);
    checkWinner(sScore, lScore);
    console.log(sScore, lScore);
  }, gameTime * 1000);
});
