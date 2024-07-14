movements = [1200, 500, -200, -400];

const balance = movements.reduce(function (acc, cur, index, arr) {
  console.log(index, acc);
  return acc + cur;
}, 0); // accumulator zaczyna od 0

let balance2 = 0;

for (let mov of movements) {
  balance2 += mov;
}

console.log(balance2);
