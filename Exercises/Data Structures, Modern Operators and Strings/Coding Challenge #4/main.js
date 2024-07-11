const textArea = document.querySelector("textarea");
const btn = document.querySelector("button");

function toCamelCase(text) {
  const textArr = text.split(" ");
  let full = "";
  for (let i of textArr) {
    if (i !== "") {
      i = i.toLowerCase();
      const floor = i.indexOf("_") + 1;
      const start = i.slice(0, floor - 1);
      const end = i.slice(floor);
      full = start + end[0].toUpperCase() + end.slice(1);
      return console.log(full);
    }
  }
}

toCamelCase("calculate_AGE");
