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

// const coords = section1.getBoundingClientRect();
// console.log(coords);

// window.addEventListener('scroll', function (e) {
//   if (window.scrollY > coords.top) {
//     nav.classList.add('sticky');
//   } else {
//     nav.classList.remove('sticky');
//   }
// });

// function obsCallBack(entries, observer) {
//   entries.forEach(element => {
//     console.log(element);
//   });
// }

// const obsOptions = {
//   root: null,
//   threshold: [0, 1],
// };

// const observer = new IntersectionObserver(obsCallBack, obsOptions);
// observer.observe(section1);

function stickyNav(entries) {
  //kazde wejscie
  const [entry] = entries; //wydzialemy nasze entry
  if (!entry.isIntersecting) {
    //gdy entry nie jest w zasiegu headera
    nav.classList.add('sticky'); //nadaje klase sticky
  } else {
    nav.classList.remove('sticky'); // a gdy jest w zasiegu headera to ją zabiera
  }
}

const headerObserver = new IntersectionObserver(stickyNav, {
  //tworzenie nowego obserwatora
  root: null, //obserwowanie na calej stronie
  threshold: 0, //punkt w ktorym konczu sie nasza sekcja
  rootMargin: `-90px`, // margin headera
});

headerObserver.observe(header); //uzywanie obserwatora na header

const allSections = document.querySelectorAll('.section'); //wszystkie sekcje

function reavealSection(entries, observer) {
  const [entry] = entries; //element ktory jest intersecting czyli jest obserwowany

  if (entry.isIntersecting) {
    //jesli entry jest w zasiegu
    entry.target.classList.remove('section--hidden'); //sciagamy classlist
    observer.unobserve(entry.target); //przestajemy obserwowac nasz target po wykonaniu sie
  }
}

const sectionObserver = new IntersectionObserver(reavealSection, {
  root: null,
  threshold: 0.15, // 15% widocznosci skecji
});

allSections.forEach(element => {
  // tworzymy petle zeby obserwowac wszystkie sekcje
  sectionObserver.observe(element);
});

const imgTargets = document.querySelectorAll('img[data-src'); // zaznacznie tylko img z data-src

function loadimg(entries, observer) {
  //funkcja ladowania zdjec
  const [entry] = entries; // wejscie ktora jest akurat uzywane

  if (!entry.isIntersecting) return; //jesli wejscie jest false to nie zwroci bledu

  entry.target.src = entry.target.dataset.src; // src ma sie zmienic na dataset src

  entry.target.addEventListener('load', function () {
    //kiedy zdjecie sie zaladuje
    entry.target.classList.remove('lazy-img'); // to sciagnie blura na zdjeciu
  });

  observer.unobserve(entry.target); //przestaje obserowoawc zdjecie po wykonaniu czynnosci
}

const imgObserver = new IntersectionObserver(loadimg, {
  //robienie obserwatora
  root: null,
  threshold: 0,
});

imgTargets.forEach(element => {
  imgObserver.observe(element); //obserwowanie wszystkich zdjec
});

const slides = document.querySelectorAll('.slide'); //wszystkie rzeczy z klasa slide

const btnLeft = document.querySelector('.slider__btn--left');
const btnRight = document.querySelector('.slider__btn--right');

let curSlide = 0; //slide ktory jest teraz uzywany

const maxSlide = slides.length - 1; //gdzie najdalej mozemy przesunac

slides.forEach((element, index) => {
  //robenie tak zeby zdjecia nie byly na sobie
  element.style.transform = `translateX(${100 * index}%)`;
});

btnRight.addEventListener('click', function () {
  if (curSlide === maxSlide) {
    //jesli slide uzywany jest rowny max slide
    curSlide = 0; //to ma wrocic na poczatek
  } else {
    curSlide++; // ma dodac 1 czyli przesunac go
  }

  slides.forEach((element, index) => {
    element.style.transform = `translateX(${100 * (index - curSlide)}%)`; //przesuwanie sliedow
  });
});

btnLeft.addEventListener('click', function () {
  if (curSlide === 0) {
    curSlide = 3;
  } else {
    curSlide--;
  }

  slides.forEach((element, index) => {
    element.style.transform = `translateX(${100 * (index - curSlide)}%)`; //przesuwanie slidow do tylu
  });
});

document.addEventListener('keydown', function (e) {
  // przesuwanie strzalka
  if (e.key === 'ArrowLeft') {
    if (curSlide === 0) {
      curSlide = 3;
    } else {
      curSlide--;
    }

    slides.forEach((element, index) => {
      element.style.transform = `translateX(${100 * (index - curSlide)}%)`; //przesuwanie slidow do tylu
    });
  }
});

document.addEventListener('keydown', function (e) {
  if (e.key === 'ArrowRight') {
    if (curSlide === maxSlide) {
      //jesli slide uzywany jest rowny max slide
      curSlide = 0; //to ma wrocic na poczatek
    } else {
      curSlide++; // ma dodac 1 czyli przesunac go
    }

    slides.forEach((element, index) => {
      element.style.transform = `translateX(${100 * (index - curSlide)}%)`; //przesuwanie sliedow
    });
  }
});

const dots = document.querySelector('.dots'); //zaznaczamy diva dots
createDots();

function createDots() {
  //tutaj tworzymy dots
  slides.forEach((element, index) => {
    const html = `<button class="dots__dot" data-slide="${index}"></button>`; // tworzymy dost z data slide tak zeby kazde bylo inne

    dots.insertAdjacentHTML('beforeend', html); // dodajemy na koncu
  });
}

function activeDot(slide) {
  document.querySelectorAll(`.dots__dot`).forEach(element => {
    //zazanczamy wszystkie dots
    element.classList.remove(`dots__dot--active`); //sciagamy im klase active
  });

  document
    .querySelector(`.dots__dot[data-slide="${slide}"]`) //teraz na slide wykona sie nadanie klasy active
    .classList.add(`dots__dot--active`);
}

dots.addEventListener('click', function (e) {
  if (e.target.classList.contains('dots__dot')) {
    //jesli nasz target zawiera klase dots dot
    const { slide } = e.target.dataset; //wyciagamy slide na ktorym jestesmy
    curSlide = slide; // cur slide ma sie rowna slide na ktory kliknelismy

    slides.forEach((element, index) => {
      element.style.transform = `translateX(${100 * (index - curSlide)}%)`; //przesuwanie sliedow
    });
    activeDot(slide);
  }
});
