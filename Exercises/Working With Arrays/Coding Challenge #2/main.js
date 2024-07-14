function calcAverageHumanAge(arr) {
  const humanAge = [];
  for (let a of arr) {
    a <= 2 ? humanAge.push(a * 2) : humanAge.push(16 + a * 4);
  }
  const only18 = humanAge.filter((x) => x >= 18);

  let average = 0;
  for (let i of only18) {
    average += i;
  }

  return console.log(average / only18.length);
}

calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
