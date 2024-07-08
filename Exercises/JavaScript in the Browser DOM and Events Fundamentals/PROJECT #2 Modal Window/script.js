'use strict';

const modal = document.querySelector('.modal');
const showModal = document.querySelectorAll('.show-modal');
const overlay = document.querySelector('.overlay');
const closeModal = document.querySelector('.close-modal');

for (let i of showModal) {
  i.addEventListener('click', function () {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
  });
}

function addHidden() {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
}

closeModal.addEventListener('click', function () {
  addHidden();
});

overlay.addEventListener('click', function () {
  addHidden();
});
