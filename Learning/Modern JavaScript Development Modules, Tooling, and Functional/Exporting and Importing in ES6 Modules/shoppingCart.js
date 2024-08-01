console.log("EXPORTt");

const shippingCost = 10;
const cart = [];

export function addToCart(product, quantity) {
  cart.push({ product, quantity });
  console.log(`YOU ADD`);
}

export { cart as c };

export default function cartAdd(product, quantity) {
  cart.push({ product, quantity });
  console.log(`YOU ADD`);
}
