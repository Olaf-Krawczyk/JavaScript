console.log("TEST START");

setTimeout(() => console.log(`object`), 0);
Promise.resolve(`Resolved promise 1`).then((response) => console.log(response));

Promise.resolve("resolved proimse 2").then((response) => {
  for (let i = 0; i < 2000000; i++) {}
  console.log(response);
});

console.log(`TEST END`);
