function shoppingCart() {
  const cart = [];
  function addToCart(product, qty) {
    cart.push({ product, qty });
    console.log(`YOU ADDED`);
  }

  return {
    addToCart,
    cart,
  };
}

shoppingCart().addToCart(`apple`, 4);
