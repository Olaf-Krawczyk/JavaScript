const movements = [1200, 300, -200, -500];

const someTest = movements.some((mov) => mov > 0);
console.log(someTest);

console.log(movements.every((x) => x < 0));
