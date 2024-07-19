const ingredients = [`apple`, `orange`];

const timer = setTimeout(
  (ing1, ing2) => {
    console.log(ing1, ing2);
  },
  2000,
  ...ingredients
);

if (ingredients.includes("apple")) {
  clearTimeout(timer);
}

const options = {
  second: `numeric`,
};

setInterval(() => {
  const now = new Date();
  console.log(new Intl.DateTimeFormat(`en-US`, options).format(now));
}, 1000);
