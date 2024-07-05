const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

for (const movement of movements) {
  //   movement > 0 ? console.log(`You deposited ${movement}`) : console.log(`You withdrew ${Math.abs(movement)}`);
}

for (let [index, value] of movements.entries()) {
  //   console.log(value);
}

movements.forEach(function (movement, index, value) {
  //   movement > 0 ? console.log(`You deposited ${movement}`) : console.log(`You withdrew ${Math.abs(movement)}`);
  console.log(index);
});
