'use strict';

const score0 = document.querySelector('#score--0');
const score1 = document.getElementById('score--1');
const dice = document.querySelector('.dice');
const btnRoll = document.querySelector('.btn--roll');
const currentScore = document.querySelector('.current-score');

dice.classList.add('hidden');

const scores = [0, 0];
let playerScore = 0;
let activePlayer = 0;

btnRoll.addEventListener('click', function () {
  const random = Math.trunc(Math.random() * 6 + 1);
  dice.classList.remove('hidden');
  dice.setAttribute('src', `dice-${random}.png`);

  if (activePlayer === 0) {
    if (random !== 1) {
      playerScore += random;
      currentScore.textContent = playerScore;
    } else {
      activePlayer = 1;
    }
  } else if (activePlayer === 1)
    if (random !== 1) {
      playerScore += random;
      currentScore.textContent = playerScore;
    } else {
      activePlayer = 0;
    }
});
