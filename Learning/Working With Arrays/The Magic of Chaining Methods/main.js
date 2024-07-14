movements = [1200, 500, 200, -300, -600];

const totalDepositInUsd = movements
  .filter((mov) => mov > 0)
  .map((mov) => mov * 1.1)
  .reduce((acc, mov) => acc + mov, 0);
