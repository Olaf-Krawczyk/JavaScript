'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

let currentAccount;
let wasClicked = false;

btnLogin.addEventListener('click', function (a) {
  a.preventDefault();
  const login = inputLoginUsername.value;

  currentAccount = accounts.find(acc => acc.username === login);
  if (currentAccount.pin == inputLoginPin.value) {
    displayMovements(currentAccount.movements);
    calcBalance(accounts);
    calcDisplaySummary(currentAccount.movements);
    labelBalance.textContent = `${currentAccount.balance}€`;
    containerApp.style.opacity = 100;
    labelWelcome.textContent = `Welcome, ${currentAccount.owner}`;
    inputLoginUsername.value = '';
    inputLoginPin.value = '';
  }
});

function displayMovements(movements) {
  containerMovements.innerHTML = '';
  movements.forEach((movement, index) => {
    const type = movement < 0 ? `withdrawal` : `deposit`;
    const html = `        
        <div class="movements__row">
          <div class="movements__type movements__type--${type}">${index} ${type}</div>
          <div class="movements__value">${movement}€</div>
        </div>`;
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
}

function calcBalance(accs) {
  for (let acc of accs) {
    let balance = 0;
    balance = acc.movements.reduce((accu, val) => (accu += val), 0);
    acc.balance = balance;
  }
}

function calcDisplaySummary(movements) {
  const incomes = movements
    .filter(mov => mov > 0)
    .reduce((accum, mov) => (accum += mov), 0);
  labelSumIn.textContent = `${incomes}€`;

  const outcomes = movements
    .filter(mov => mov < 0)
    .reduce((accu, mov) => (accu += mov), 0);
  labelSumOut.textContent = `${Math.abs(outcomes)}€`;

  const intrest = movements
    .filter(mov => mov > 0)
    .map(mov => (mov * 1.2) / 100)
    .reduce((accu, mov) => (accu += mov));

  labelSumInterest.textContent = `${intrest}€`;
}

function makeUserName(accs) {
  accs.forEach(acc => {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(x => x.at(0))
      .join('');
  });
}

makeUserName(accounts);

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);

  if (amount > 0 && currentAccount.balance >= amount) {
    const reviverAcc = accounts.find(
      acc => acc.username === inputTransferTo.value
    );
    if (reviverAcc) {
      reviverAcc.balance += amount;
      currentAccount.balance -= amount;
      reviverAcc.movements.push(amount);
      currentAccount.movements.push(amount * -1);
      displayMovements(currentAccount.movements);
      calcDisplaySummary(currentAccount.movements);
      labelBalance.textContent = `${currentAccount.balance}€`;
    }
  }
});

btnClose.addEventListener('click', function (x) {
  x.preventDefault();
  if (
    inputCloseUsername.value === currentAccount.username &&
    inputClosePin.value == currentAccount.pin
  ) {
    const index = accounts.findIndex(
      x => x.username === currentAccount.username
    );
    accounts.splice(index, 1);
    containerApp.style.opacity = 0;
  }
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputLoanAmount.value);

  if (amount > 0 && currentAccount.movements.some(x => x >= amount * 0.1)) {
    currentAccount.movements.push(amount);
    displayMovements(currentAccount.movements);
    calcDisplaySummary(currentAccount.movements);
    labelBalance.textContent = `${currentAccount.balance}€`;
  }
});

btnSort.addEventListener('click', function () {
  if (!wasClicked) {
    currentAccount.movements.sort((a, b) => {
      if (a > b) {
        return 1;
      } else if (b > a) {
        return -1;
      }
    });
    wasClicked = true;
  } else {
    currentAccount.movements.sort((a, b) => {
      if (a > b) {
        return -1;
      } else if (b > a) {
        return 1;
      }
    });
    wasClicked = false;
  }
  displayMovements(currentAccount.movements);
});
