'use strict';

const score0 = document.querySelector('#score--0');
const score1 = document.getElementById('score--1');
const dice = document.querySelector('.dice');
const btnRoll = document.querySelector('.btn--roll');
const currentScore0 = document.querySelector('#current--0');
const currentScore1 = document.querySelector('#current--1');
const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');
const btnHold = document.querySelector('.btn--hold');
const scoreOvr0 = document.querySelector('#score--0');
const scoreOvr1 = document.querySelector('#score--1');
const btnNew = document.querySelector('.btn--new');

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
      currentScore0.textContent = playerScore;
    } else {
      activePlayer = 1;
      playerScore = 0;
      currentScore0.textContent = playerScore;
      player0.classList.remove('player--active');
      player1.classList.add('player--active');
    }
  } else if (activePlayer === 1)
    if (random !== 1) {
      playerScore += random;
      currentScore1.textContent = playerScore;
    } else {
      activePlayer = 0;
      playerScore = 0;
      currentScore1.textContent = playerScore;
      player1.classList.remove('player--active');
      player0.classList.add('player--active');
    }
});

btnHold.addEventListener('click', function () {
  if (activePlayer === 0) {
    scores[activePlayer] += playerScore;
    scoreOvr0.textContent = scores[activePlayer];
    player0.classList.remove('player--active');
    player1.classList.add('player--active');
    activePlayer = 1;
    playerScore = 0;
    currentScore0.textContent = 0;
  } else if (activePlayer === 1) {
    scores[activePlayer] += playerScore;
    scoreOvr1.textContent = scores[activePlayer];
    player1.classList.remove('player--active');
    player0.classList.add('player--active');
    playerScore = 0;
    currentScore1.textContent = 0;
    activePlayer = 0;
  }
});
