const movements = [1200, 550, 200, 100, -100, -300, -600];

const deposits = movements.filter(function (mov) {
  return mov > 0;
});

const withdrawals = movements.filter((x) => x < 0);

console.log(withdrawals);
