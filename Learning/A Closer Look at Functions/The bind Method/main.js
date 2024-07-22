const lufthansa = {
  airline: "LT",
  book(flightNum, name) {
    console.log(`${name} booked a seat on ${this.airline}${flightNum}`);
  },
};

const poland = {
  airline: "PL",
  book(flightNum, name) {
    console.log(`${name} booked a seat on ${this.airline}${flightNum}`);
  },
};

const book = lufthansa.book;

const booksPl = book.bind(poland);
const booksLf = book.bind(lufthansa);

booksPl(23, "Steven Williams");

const booksPL25 = book.bind(poland, 25);

booksPL25("Stefan");

poland.planes = 300;
poland.buyPlane = function () {
  this.planes++;
  console.log(this.planes);
};

const body = document.querySelector("body");

const btn = document.createElement("button");

btn.textContent = "Submit";

body.appendChild(btn);

btn.addEventListener("click", poland.buyPlane.bind(poland));

const addTax = function (rate, value) {
  return value + value * rate;
};

const addVat = addTax.bind(null, 0.23);

console.log(addVat(200));

const addTax2 = function () {
  return function (value) {
    return value + value * 0.23;
  };
};

console.log(addTax2()(100));
