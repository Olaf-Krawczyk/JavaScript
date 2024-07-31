async function searchCountry(country) {
  const response = await fetch(`https://restcountries.com/v3.1/name/${country}`);
  const [data] = await response.json();
  console.log(data);
}

searchCountry("poland");

const body = document.querySelector("body");

async function loadImg(arr) {
  arr.forEach((element) => {
    const img = document.createElement(`img`);
    img.src = element;
    body.appendChild(img);
  });
}

loadImg([
  `https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg`,
  `https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg`,
  `https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg`,
]);
