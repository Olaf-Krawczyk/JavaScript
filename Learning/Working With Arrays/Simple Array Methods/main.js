"use strict";

let arr = ["a", "b", "c", "d", "e"];

console.log(arr.slice(2));
console.log(arr.slice(-1));

console.log(arr.slice());
console.log(...arr);

console.log(arr.splice(-1));

arr.splice(1, 2);
console.log(arr);

arr = ["a", "b", "c", "d", "e"];
let arr2 = ["k", "i", "h", "g", "j"];

console.log(arr2.reverse());

const letters = arr.concat(arr2);
console.log(letters);

console.log(letters.join(" "));
