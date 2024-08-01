const cart = [];

function addToCart(item, qty) {
  cart.push({ item, qty });
  console.log(`YOU ADDED ${item} x${qty}`);
}

addToCart(`bread`, 5);

// const { addToCart } = require("");
