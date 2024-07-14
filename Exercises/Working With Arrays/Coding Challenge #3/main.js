function calcAverageHumanAge(arr) {
  const dogYears = arr
    .map((val) => (val <= 2 ? val * 2 : 16 + val * 2))
    .filter((val) => val >= 18)
    .reduce((accu, val) => (accu += val), 0);
  return Math.trunc(dogYears / arr.length);
}

const answer = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
