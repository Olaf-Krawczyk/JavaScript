"use strict";

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: "Jonas Schmedtmann",
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: "Jessica Davis",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: "Steven Thomas Williams",
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: "Sarah Smith",
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

const depositAll = accounts
  .flatMap((x) => x.movements)
  .filter((x) => x > 0)
  .reduce((accu, x) => accu + x, 0);

const depositOneTh = accounts.flatMap((x) => x.movements).reduce((count, val) => (val >= 1000 ? count + 1 : count), 0);

const sums = accounts
  .flatMap((acc) => acc.movements)
  .reduce(
    (sums, cur) => {
      sums[cur > 0 ? "deposits" : "withdrawals"] += cur;
      return sums;
    },
    { deposits: 0, withdrawals: 0 }
  );

const convertTitleCase = function (title) {
  const expections = ["a", "an", "the", "but", "or"];

  const titleCase = title
    .toLowerCase()
    .split(" ")
    .map((word) => (expections.includes(word) ? word : word.at(0).toUpperCase() + word.slice(1)));
  console.log(titleCase);
};

convertTitleCase("this is a nice title");
