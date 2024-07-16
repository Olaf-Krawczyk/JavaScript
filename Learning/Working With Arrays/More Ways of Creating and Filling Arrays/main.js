const arr = [1, 2, 3, 4, 5, 6, 7];

const x = new Array(7);
// console.log(x);

// x.fill(1);

x.fill(1, 3);

arr.fill(23, 2, 6);

const sth = Array.from(() => 1);

sth.push("siema", "elo", { work: true });
