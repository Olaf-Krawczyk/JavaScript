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

btnCheck.addEventListener('click', function () {
  const value = Number(guess.value);
  console.log(userScore);
  if (userScore == 0) {
    message.textContent = 'You cant play, press Again!';
  } else {
    if (!value) {
      console.log('Error');
      message.textContent = 'No number entered';
    } else if (value === secretNumber) {
      if (userScore > hG) {
        highscore.textContent = userScore;
      } else {
        hG += userScore;
        highscore.textContent = hG;
      }
      message.textContent = 'You won!!';
      body.style.backgroundColor = 'green';
      number.textContent = secretNumber;
      number.style.width = '30rem';
      hG = userScore;
    } else if (value < secretNumber) {
      message.textContent = 'Secret number is higher';
      userScore--;
      score.textContent = userScore;
    } else if (value > secretNumber) {
      message.textContent = 'Secret number is lower';
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
