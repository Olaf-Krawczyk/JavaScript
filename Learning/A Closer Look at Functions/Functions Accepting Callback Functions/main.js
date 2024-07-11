const oneWord = function (str) {
  return str.replace(/ /g, "").toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(" ");
  return [first.toUpperCase(), ...others].join(" ");
};

const transformer = function (str, fn) {
  console.log(fn(str));

  console.log(fn.name);
};

transformer("JavaScript is the best", upperFirstWord);

transformer("JavaScript is the best", oneWord);

const highFive = function () {
  console.log("High Five!");
};
["Jonas", "Mik", "trik"].forEach(highFive);
