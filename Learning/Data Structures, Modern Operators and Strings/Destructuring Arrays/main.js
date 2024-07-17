"use strict ";

//wyciaganie z tabeli do czegos
const arr = [2, 3, 4];

const [a, b, c] = arr;

console.log(a, b, c);

const restaurant = {
  name: "Italian pizzeria",
  location: "In the middle of nowhere",
  categories: ["Pizzeria", "Vege", "Fast"],
  starterMenu: ["Focaccia", "Garlic Bread"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
};
// wyciganie z tabeli z pominieciem
let [first, , second] = restaurant.categories;

[first, second] = [second, first];

console.log(first, second);

//przypisywanie dwoch rzeczy z returna funckji
const [start, main] = restaurant.order(1, 0);

console.log(start, main);

//wyciaganie z tabeli w tabeli
const nested = [2, 4, [5, 6]];

const [i, , [j, k]] = nested;

console.log(i, j, k);

//przypisywanie wartosci do czegos
const [p = 1, q = 1, r = 1] = [8, 9];
