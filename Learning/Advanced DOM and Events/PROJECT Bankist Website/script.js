'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const header = document.querySelector('.header');

btnsOpenModal.forEach(element => {
  element.addEventListener('click', function (e) {
    e.preventDefault();
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
  });
});

btnCloseModal.addEventListener('click', function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
});

const message = document.createElement('div');
message.classList.add('cookie-message');
message.innerHTML = `loremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremlorem <button class="btn btn-close-cookie"> Click here</button>`;
message.style.backgroundColor = `#37383d`;
message.style.width = `120%`;
message.style.height = `80px`;
header.appendChild(message);

const btnCloseCookie = document.querySelector('.btn-close-cookie');

btnCloseCookie.addEventListener('click', function () {
  message.remove();
});

// document.documentElement.style.setProperty('--color-primary', 'orangered');

const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

btnScrollTo.addEventListener('click', function (e) {
  // const s1coords = section1.getBoundingClientRect();

  // window.scrollTo({
  //   top: s1coords.top + window.scrollY,
  //   behavior: 'smooth',
  // });

  section1.scrollIntoView({ behavior: 'smooth' });
});
