'use strict';
const guess = document.querySelector('.guess');
const btnCheck = document.querySelector('#btnn');
const message = document.querySelector('.message');
const body = document.querySelector('body');
const number = document.querySelector('.number');
const again = document.querySelector('.again');
const score = document.querySelector('.score');
const highscore = document.querySelector('.highscore');

let secretNumber = Math.trunc(Math.random() * 20 + 1);
console.log(secretNumber);
let userScore = 20;
let hG = 0;

function displayMessage(mes) {
  message.textContent = mes;
}

btnCheck.addEventListener('click', function () {
  const value = Number(guess.value);
  console.log(userScore);
  if (userScore == 0) {
    displayMessage('You cant play, press Again!');
  } else {
    if (!value) {
      console.log('Error');
      displayMessage('No number entered');
    } else if (value === secretNumber) {
      if (userScore > hG) {
        highscore.textContent = userScore;
      } else {
        hG += userScore;
        highscore.textContent = hG;
      }
      displayMessage('You won!!');
      body.style.backgroundColor = 'green';
      number.textContent = secretNumber;
      number.style.width = '30rem';
      hG = userScore;
    } else if (value < secretNumber) {
      displayMessage('Secret number is higher');
      userScore--;
      score.textContent = userScore;
    } else if (value > secretNumber) {
      displayMessage('Secret number is lower');
      userScore--;
      score.textContent = userScore;
    }
  }
});

again.addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  body.style.backgroundColor = '#222';
  number.textContent = '?';
  message.textContent = 'Start guessing...';
  number.style.width = '15rem';
  userScore = 20;
  score.textContent = userScore;
});
