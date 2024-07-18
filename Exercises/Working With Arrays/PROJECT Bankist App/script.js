'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    '2019-11-18T21:31:17.178Z',
    '2019-12-23T07:42:02.383Z',
    '2020-01-28T09:15:04.904Z',
    '2020-04-01T10:17:24.185Z',
    '2020-05-08T14:11:59.604Z',
    '2020-05-27T17:01:17.194Z',
    '2020-07-11T23:36:17.929Z',
    '2024-07-17T10:51:36.790Z',
  ],
  currency: 'EUR',
  locale: 'pt-PT', // de-DE
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2020-04-10T14:43:26.374Z',
    '2020-06-25T18:49:59.371Z',
    '2024-07-18T12:01:20.894Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

const accounts = [account1, account2];

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

btnLogin.addEventListener('click', function (e) {
  e.preventDefault();
  const login = accounts.find(x => x.username === inputLoginUsername.value);
  if (login && login.pin === Number(inputLoginPin.value)) {
    containerApp.style.opacity = 100;
    currentAccount = login;
    displayMovements(currentAccount);
    calcBalance(currentAccount);
    labelBalance.textContent = `${currentAccount.balance.toFixed(2)}€`;
    displayIntrestEtc(currentAccount.movements);
  }
});

function calcDate(date) {
  const calcDaysPassed = (date1, date2) =>
    Math.round(Math.abs(date2 - date1) / (1000 * 60 * 60 * 24));

  const daysPassed = calcDaysPassed(new Date(), date);

  if (daysPassed === 0) {
    console.log('Today');
  } else if (daysPassed === 1) {
    console.log(`Yesterday`);
  } else if (daysPassed <= 7) {
    console.log(`Days passed ${daysPassed}`);
  } else {
    console.log(daysPassed);
  }

  const day = `${date.getDate()}`.padStart(2, 0);
  const month = `${date.getMonth() + 1}`.padStart(2, 0);
  const year = `${date.getFullYear()}`;
  return `${day}/${month}/${year}`;
}

function displayMovements(accs) {
  containerMovements.innerHTML = '';
  accs.movements.forEach((element, index) => {
    const type = element > 0 ? `deposit` : `withdrawal`;
    const date = new Date(accs.movementsDates[index]);

    const displayDate = calcDate(date);

    const html = `        <div class="movements__row">
          <div class="movements__type movements__type--${type}">${
      index + 1
    } ${type}</div>
    <div class="movements__date">${displayDate}</div>
          <div class="movements__value">${element.toFixed(2)}€</div>
        </div>`;
    containerMovements.insertAdjacentHTML(`afterbegin`, html);
  });
}

function calcBalance(acc) {
  let amount = 0;
  for (let v of acc.movements) {
    acc.balance = amount += v;
  }
  displayIntrestEtc(currentAccount.movements);
}

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();
  const howMany = inputLoanAmount.value;
  if (howMany > 0) {
    currentAccount.movements.push(Number(howMany));
    currentAccount.movementsDates.push(now.toISOString());
    displayMovements(currentAccount);
    calcBalance(currentAccount);
    labelBalance.textContent = `${currentAccount.balance.toFixed(2)}€`;
  }
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();
  const index = accounts.findIndex(
    x => x.username === inputCloseUsername.value
  );

  if (
    currentAccount.pin === Number(inputClosePin.value) &&
    currentAccount.username === inputCloseUsername.value
  ) {
    accounts.splice(index, 1);
    containerApp.style.opacity = 0;
  }
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const transferTo = accounts.find(x => x.username === inputTransferTo.value);
  const amo = Number(inputTransferAmount.value);
  calcBalance(transferTo);

  if (currentAccount.balance >= amo && transferTo) {
    currentAccount.balance -= amo;
    transferTo.balance += amo;
    currentAccount.movements.push(amo * -1);
    currentAccount.movementsDates.push(now.toISOString());
    transferTo.movements.push(amo);
    displayMovements(currentAccount);
    labelBalance.textContent = `${currentAccount.balance.toFixed(2)}€`;
  }
});

function displayIntrestEtc(movements) {
  const deposit = movements
    .filter(x => x > 0)
    .reduce((accu, val) => (accu += val), 0);
  labelSumIn.textContent = `${deposit.toFixed(2)}€`;

  const out = movements
    .filter(x => x < 0)
    .reduce((accu, val) => (accu += val), 0);
  labelSumOut.textContent = `${Math.abs(out.toFixed(2))}€`;

  const intrest = movements
    .filter(x => x > 0)
    .reduce((accu, val) => (accu += val * 0.01), 0);
  labelSumInterest.textContent = `${intrest.toFixed(2)}€`;
}

let changed = false;

btnSort.addEventListener('click', function (e) {
  e.preventDefault();

  if (!changed) {
    currentAccount.movements.sort((a, b) => a > b);
    changed = true;
  } else if (changed) {
    currentAccount.movements.sort((a, b) => a < b);
    changed = false;
  }

  displayMovements(currentAccount);
});

const now = new Date();
const day = now.getDate();
const month = now.getMonth() + 1;
const year = now.getFullYear();
const hour = now.getHours();
const minutes = now.getMinutes();

labelDate.textContent = `${day}/${month}/${year} ${hour}:${minutes}`;
