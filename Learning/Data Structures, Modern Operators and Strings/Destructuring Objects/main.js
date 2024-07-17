const restaurant = {
  orderDevilery: function ({ time, address, starter, main }) {
    console.log(time, address, main, starter);
  },
  name: "Italiano",
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 10,
      close: 20,
    },
    sat: {
      open: 8,
      close: 18,
    },
  },
};
// wyciaganie danych z object
const { name: restaurantName } = restaurant;

console.log(restaurantName);

// mozemmy dac jakas wartosc jesli menu nie istnieje
const { menu = [] } = restaurant;
// pyrzpisywanie wartosc z tabeli do variabla
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };

({ a, b } = obj);

// wyciaganie z objectu objectu id danych
const { openingHours } = restaurant;

const {
  fri: { open, close },
} = openingHours;

// destructing w funkcji
restaurant.orderDevilery({ time: "22:30", address: "Somewhere", starter: "Foccacia", main: "Pizza" });
