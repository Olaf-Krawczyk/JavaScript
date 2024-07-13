const movements = [200, 300, 1200, -400, -200, -500];

const eurToUsd = 1.1;

const usdMov = movements.map((movement) => movement * eurToUsd);

movements.map((movement) => (movement < 0 ? console.log(`Withdrew ${Math.abs(movement)}`) : console.log(`Deposit ${movement}`)));

const movementsV2 = movements.map(function (movement, index, arr) {
  if (movement > 0) {
    return `INDEX: ${index}, MOVEMENT: ${movement}, ${arr}`;
  } else {
    return `INDEX: ${index}, MOVEMENT: ${movement}, ${arr}`;
  }
});
