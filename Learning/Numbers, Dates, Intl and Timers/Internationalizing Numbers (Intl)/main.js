const num = 388423141.23;

const options = {
  style: `currency`,
  currency: `EUR`,
  useGrouping: false,
};

console.log(new Intl.NumberFormat(navigator.language, options).format(num));
