'use strict';

const modal = document.querySelector('.modal');
const showModal = document.querySelectorAll('.show-modal');
const overlay = document.querySelector('.overlay');
const closeModal = document.querySelector('.close-modal');

function addHidden() {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
}

function removeHidden() {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
}

for (let i of showModal) {
  i.addEventListener('click', function () {
    removeHidden();
  });
}

closeModal.addEventListener('click', function () {
  addHidden();
});

overlay.addEventListener('click', function () {
  addHidden();
});

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    addHidden();
  }
});
