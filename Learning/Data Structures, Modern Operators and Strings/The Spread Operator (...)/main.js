const arr = [7, 8, 9];

const newArr = [1, 2, ...arr];

console.log(...newArr);

const restaurant = {
  mainMenu: ["Pizza", "Pasta"],
  orderPasta: function (ing1, ing2, ing3) {
    return console.log(ing1, ing2, ing3);
  },
};

//dodawanie do tabeli
const newMenu = [...restaurant.mainMenu, "Gnocci"];

//kopiowanie array

const mainMenuCopy = [...restaurant.mainMenu];

//2 tabele razem

const menu = [...newMenu, ...mainMenuCopy];

console.log(...menu);

//
const str = "Jonas";
const letters = [...str, " ", "S."];
console.log(letters);
//

const ingredients = [prompt("One"), prompt("One"), prompt("One")];

restaurant.orderPasta(...ingredients);
//

const newRestaurant = { ...restaurant, founder: "Guessepe" };

console.log(newRestaurant);
