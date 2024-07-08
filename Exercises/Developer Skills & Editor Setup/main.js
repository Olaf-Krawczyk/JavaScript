const temp = [17, 21, 23];

function printForecast(arr) {
  let ourValue = "";
  for (let i = 0; i < arr.length; i++) {
    ourValue += `Day ${i + 1} temp: ${temp[i]} `;
  }
  return ourValue;
}

console.log(printForecast(temp));
