const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

const tips = [];
const totals = [];

for (let i = 0; i < bills.length; i++) {
  tips.push(calcTip(bills[i]));
  totals.push(bills[i] + tips[i]);
}

console.log(totals);

function calcAverage(arr) {
  let overall = 0;
  for (let y = 0; y < arr.length; y++) {
    overall += arr[y];
  }

  return overall / arr.length;
}

console.log(calcAverage([10, 20, 30, 40]));
