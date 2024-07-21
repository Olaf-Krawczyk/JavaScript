'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const header = document.querySelector('.header');
const navLink = document.querySelectorAll('.nav__link');
const operationsContent = document.querySelector('.operations__tab-container');
const tabs = document.querySelectorAll('.operations__tab');
const tabsContent = document.querySelectorAll('.operations__content');
const nav = document.querySelector('.nav');
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

btnsOpenModal.forEach(element => {
  //kiedy klikniemy na przycisk odpali sie menu
  element.addEventListener('click', function (e) {
    e.preventDefault();
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
  });
});

btnCloseModal.addEventListener('click', function () {
  //kiedy klikniemy na przycisk zamknie sie menu
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
});

const message = document.createElement('div');
message.classList.add('cookie-message');
//dodajemy do diva html
message.innerHTML = `loremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremlorem <button class="btn btn-close-cookie"> Click here</button>`;
message.style.backgroundColor = `#37383d`;
message.style.width = `120%`;
message.style.height = `80px`;
header.appendChild(message);

const btnCloseCookie = document.querySelector('.btn-close-cookie');

btnCloseCookie.addEventListener('click', function () {
  message.remove(); //usuwanie jakiegos elementu
});

// document.documentElement.style.setProperty('--color-primary', 'orangered'); // mozna zmieniac style w root

btnScrollTo.addEventListener('click', function (e) {
  // const s1coords = section1.getBoundingClientRect();

  // window.scrollTo({
  //   top: s1coords.top + window.scrollY,
  //   behavior: 'smooth',
  // });

  section1.scrollIntoView({ behavior: 'smooth' }); // scrollujemy do poczatku naszego elementu
});

// const h1 = document.querySelector('h1');

// h1.addEventListener('mouseenter', function () {
//   console.log('WORK?');
// });

// navLink.forEach(element => {
//   element.addEventListener('click', function (e) {
//     e.preventDefault();
//     const id = this.getAttribute('href');
//     document.querySelector(id).scrollIntoView({ behavior: `smooth` });
//   });
// });

document.querySelector('.nav__links').addEventListener('click', function (e) {
  e.preventDefault();
  try {
    const id = e.target.getAttribute('href'); //zaznaczmy id z hrefa
    document.querySelector(id).scrollIntoView({ behavior: `smooth` }); //scrollujemy do id
  } catch (error) {}
});

operationsContent.addEventListener('click', function (e) {
  // zaznaczamy cala list
  const clicked = e.target.closest('.operations__tab'); //z naszego targetu zazanczamy najblizszy operations tab

  if (!clicked) return; // robimy to zeby nie zwrocilo bledu

  tabs.forEach(element => {
    // dla kazdego przycisku usuwamy klase active
    element.classList.remove('operations__tab--active');
  });

  clicked.classList.add('operations__tab--active'); //nadajemy na naszymy operation tab klace active

  tabsContent.forEach(element => {
    // dla kazdego tektstu usuwamy active
    element.classList.remove('operations__content--active');
  });
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`) //clicked ma atrubyt data wiec wyciagamy gho i nadajemy actrive na tym wcyiagnietym
    .classList.add('operations__content--active');
});

function handleHover(e, opacity) {
  //kiedy najedziemy myszka
  if (e.target.classList.contains('nav__link')) {
    //sprawdzamy czy nasz target ma klase nav link
    const siblings = e.target.closest('.nav').querySelectorAll('.nav__link'); // z najblizszego nava bierzemy nav link

    const logo = e.target.closest('.nav').querySelector('img'); // tutaj zaznaczamy logo z najblizszego nava

    siblings.forEach(element => {
      // robimy petle dla kazdego nav link
      if (element !== e.target) {
        // jestli nasz nav link nie jest rowny target to
        element.style.opacity = opacity; // zmieniamy opacity
        logo.style.opacity = opacity;
      }
    });
  }
}

nav.addEventListener('mouseover', function (e) {
  handleHover(e, 0.5);
});

nav.addEventListener('mouseout', function (e) {
  handleHover(e, 1);
});
