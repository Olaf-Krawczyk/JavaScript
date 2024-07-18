const future = new Date(2037, 10, 19, 16, 23);
console.log(+future);

const daysPassed = (date1, date2) => (date2 - date1) / (1000 * 60 * 60 * 24);

const days = daysPassed(new Date(2037, 3, 14), new Date(2037, 3, 24));

console.log(days);
