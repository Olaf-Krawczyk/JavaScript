'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////

function displayCountries(data, className = '') {
  const html = `
  <article class="country ${className}">
  <img class="country__img" src="${data.flag}" />
  <div class="country__data">
    <h3 class="country__name">${data.name}</h3>
    <h4 class="country__region">${data.region}</h4>
    <p class="country__row"><span>👫</span>${(
      +data.population / 1000000
    ).toFixed(1)} mln</p>
    <p class="country__row"><span>🗣️</span>${data.languages.at(0).name}</p>
    <p class="country__row"><span>💰</span>${data.currencies.at(0).name}</p>
  </div>
</article>`;

  countriesContainer.insertAdjacentHTML(`beforeend`, html);
  countriesContainer.style.opacity = 1;
}

// function getCountryData(country) {
//   const request = new XMLHttpRequest();

//   request.open('GET', `https://restcountries.com/v2/name/${country}`);

//   request.send();

//   request.addEventListener('load', function () {
//     const [data] = JSON.parse(this.responseText);
//     displayCountries(data);

//     const [neighbour] = data.borders;

//     if (!neighbour) return;

//     const request2 = new XMLHttpRequest();
//     request2.open('GET', `https://restcountries.com/v2/alpha/${neighbour}`);
//     request2.send();
//     request2.addEventListener('load', function () {
//       const data2 = JSON.parse(this.responseText);
//       displayCountries(data2, 'neighbour');
//     });
//   });
// }

// getCountryData('portugal');
// getCountryData('usa');

function renderError(msg) {
  countriesContainer.insertAdjacentText('beforeend', msg);
}

function getCountryData(country) {
  fetch(`https://restcountries.com/v2/name/${country}`)
    .then(response => {
      return response.json();
    })
    .then(data => {
      displayCountries(data[0]);
      const neighbour = data[0].borders[0];
      if (!neighbour) return;
      fetch(`https://restcountries.com/v2/alpha/${neighbour}`)
        .then(response => {
          return response.json();
        })
        .then(data2 => {
          displayCountries(data2, 'neighbour');
        })
        .catch(err => {
          console.error(err);
          renderError(`Something went wrong! ${err.message}. Try again!`);
        })
        .finally(() => {
          countriesContainer.style.opacity = 1;
        });
    });
}

btn.addEventListener('click', function () {
  getCountryData('portugal');
});
