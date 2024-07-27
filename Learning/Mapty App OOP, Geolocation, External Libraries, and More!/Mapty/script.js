'use strict';

const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputCadence = document.querySelector('.form__input--cadence');
const inputElevation = document.querySelector('.form__input--elevation');

class Workout {
  //tworzymy klase workout
  date = new Date(); // tworzymy date
  id = (Date.now() + '').slice(-10); // nasze id na klasie workout tworzymy w ten sposob

  constructor(coords, distance, duration) {
    // tworzymy konsturkotr ktory przechowuje kordy, dystance i czas
    this.coords = coords;
    this.distance = distance;
    this.duration = duration;
  }

  _setDescription() {
    //tworzymy opis naszych markerow
    // prettier-ignore
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    this.description = `${this.type[0].toUpperCase()}${this.type.slice(1)} on ${
      //wyciagamy pierwsza litere type i dodajemy do niego resztre slowa
      months[this.date.getMonth()] // wyciagamy miesiac
    }`;
  }
}

class Running extends Workout {
  //tworzymy class dziecko Workouts
  type = 'running'; // type przypisujemy do running
  constructor(coords, distance, duration, cadence) {
    super(coords, distance, duration); // dodajmy klasy z rodzica
    this.cadence = cadence; // klasa tylko dla running
    this.calcPace(); // uzywamy funckji ktora kaluluje pace
    this._setDescription(); // uzywamy funkcji ktora robi description
  }

  calcPace() {
    // liczenie pace
    this.pace = this.duration / this.distance;
    return this.pace;
  }
}

class Cycling extends Workout {
  // twoprzymy to samo running tylko dla cycling
  type = 'cycling';
  constructor(coords, distance, duration, elevationGain) {
    super(coords, distance, duration);
    this.elevationGain = elevationGain;
    this.calcSpeed();
    this._setDescription();
  }

  calcSpeed() {
    this.speed = this.distance / this.duration / 60;
    return this.speed;
  }
}

class App {
  #map; // tworzmy mape ktora bedzie tylko dostepna w klasie app
  #mapEvent; // tworzymy mapevent z ktorego wyciagniemy pozniej coords
  #workouts = []; // tworzymy tabele ze wszystkimi workoutami
  #mapzoomlevel = 13; // map zoom na 13

  constructor() {
    this._getPosition(); // uzywamy funckji ktora daje nasza pozycje

    this._getLocalStorage(); // uzywamy funkcji ktora pobiera nasz local storage

    form.addEventListener('submit', this._newWorkout.bind(this)); // dodajemy do forma event listener, i uzywamy bind zeby this w srodku dziala

    inputType.addEventListener('change', this._toggleElevationsField); // robimy to samo co wyzej
    containerWorkouts.addEventListener(`click`, this._moveToPopup.bind(this)); // tutaj tez
  }

  _getPosition() {
    // pobieramy pozycje uzytkownika
    if (navigator.geolocation) {
      // jesli pozycja moze zostac pobrana
      navigator.geolocation.getCurrentPosition(
        // to pytamy sie o pobranie
        this._loadMap.bind(this), // uzywamy funckji ktora zaladuje mape
        function () {
          alert('Could not get your position'); // jesliu uzytkownik nie wyrazi zgody to pojawi sie alert
        }
      );
    }
  }

  _loadMap(position) {
    // funckja ktora laduje mape
    const { latitude } = position.coords; // kordy
    const { longitude } = position.coords;

    const coords = [latitude, longitude]; // przypisujemy jedne i drugie kordy do tabeli

    this.#map = L.map('map').setView(coords, this.#mapzoomlevel); //naszemu #map dajemy mape

    L.tileLayer('https://tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
      // zmieniamy styyl
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(this.#map); // dodajemy wizje dla naszej mapy

    this.#map.on('click', this._showForm.bind(this)); // kiedy klikniemy na mape to wykona sie evenet ktory pokaze nam forma

    this.#workouts.forEach(element => {
      // petla dla kazdego rzeczy w #workouts
      this._renderWorkoutMaker(element); // dla kazdego elementu renderujemy marker
    });
  }

  _showForm(mapE) {
    // funckja show form ktora pokaze forma

    // mapE kazde nasze kliknieceie
    this.#mapEvent = mapE; // przypisujemy kazde nasze kliknieceie do mapEvent
    form.classList.remove('hidden'); // sciagamy klase hidden
    inputDistance.focus(); // ustawiamy focus na inputDistance
  }

  _hideForm() {
    inputElevation.value = '';
    inputCadence.value = '';
    inputDuration.value = '';
    inputDistance.value = ''; // reset wszystkich pól
    form.style.display = 'none'; // zmieniamy na display none
    form.classList.add('hidden'); //dodajemy klase hidden

    setTimeout(() => {
      // uzywamnt triku zeby nasze elementu podmniely sie bez animacji
      form.style.display = 'grid';
    }, 1000);
  }

  _toggleElevationsField() {
    // funkcja ktora zmienia nam element w zalezonosci od wybranej lubryki
    inputDistance.focus();
    inputElevation.closest('.form__row').classList.toggle('form__row--hidden'); //toggle wylacza albo wlacza dana opcje
    inputCadence.closest('.form__row').classList.toggle('form__row--hidden'); //wiecj jesli jest odpalona to ją zdjemie albo na odwrot
  }
  _newWorkout(e) {
    // tworzy nowy workout
    function validInputs(...inputs) {
      return inputs.every(inp => Number.isFinite(inp)); //sprawdzanie czy wszystki liczby sa pozytywne a nie np sa literami
    }

    function allPositive(...inputs) {
      return inputs.every(inp => inp > 0); // sprawdza czy liczby sa wieksze niz 0
    }

    e.preventDefault();

    const type = inputType.value;
    const distance = +inputDistance.value;
    const duration = +inputDuration.value;
    const { lat, lng } = this.#mapEvent.latlng; // wyciagamy z #mapEvent nasze coordy
    let workout; // tworzymy workout

    if (type === 'running') {
      const cadence = +inputCadence.value;
      if (
        !validInputs(distance, duration, cadence) ||
        !allPositive(distance, duration, cadence)
      )
        return alert('ABVC');

      workout = new Running([lat, lng], distance, duration, cadence); // jesli wszystko bedzie git to stworzymy nowy Running i przypisze go do workout
    }

    if (type === 'cycling') {
      const elevation = +inputElevation.value;
      if (
        !validInputs(distance, duration, elevation) ||
        !allPositive(distance, duration)
      )
        return alert('ABVC');

      workout = new Cycling([lat, lng], distance, duration, elevation);
    }

    this.#workouts.push(workout); // pozniej do tabeli workouts damy workout

    this._renderWorkoutMaker(workout); // funckja renderujaca marker
    this._renderWorkout(workout); // funckja renderujaca workout
    this._hideForm(); // funckja chowajaca forma

    this._setLocalStorage(); // funckja robiaca local storage
  }

  _renderWorkoutMaker(workout) {
    // tworzy marker
    L.marker(workout.coords) // na coordach z workout
      .addTo(this.#map) //dodajmy do naszej mapy
      .bindPopup(
        L.popup({
          maxWidth: 250,
          minWidth: 120,
          autoClose: false,
          closeOnClick: false,
          className: `${workout.type}-popup`, // i tworzy nam na podstawie type
        })
      )
      .setPopupContent(
        `${workout.type === 'running' ? `🏃‍♂️` : `🚴‍♀️`} ${workout.description}` // kontent pobieramy z workout description
      )
      .openPopup();
  }

  _renderWorkout(workout) {
    //tworzyny workouty z pomoca html
    let html = `<li class="workout workout--${workout.type}" data-id="${
      workout.id
    }">
          <h2 class="workout__title">${workout.description}</h2>
          <div class="workout__details">
            <span class="workout__icon">${
              workout.type === 'running' ? `🏃‍♂️` : `🚴‍♀️`
            }</span>
            <span class="workout__value">${workout.distance}</span>
            <span class="workout__unit">km</span>
          </div>
          <div class="workout__details">
            <span class="workout__icon">⏱</span>
            <span class="workout__value">${workout.duration}</span>
            <span class="workout__unit">min</span>
          </div>`;

    if (workout.type === 'running') {
      html += `
                      <div class="workout__details">
            <span class="workout__icon">⚡️</span>
            <span class="workout__value">${workout.pace.toFixed(1)}</span>
            <span class="workout__unit">min/km</span>
          </div>
          <div class="workout__details">
            <span class="workout__icon">🦶🏼</span>
            <span class="workout__value">${workout.cadence}</span>
            <span class="workout__unit">spm</span>
          </div>
        </li>`;
    }

    if (workout.type === 'cycling') {
      html += `          <div class="workout__details">
            <span class="workout__icon">⚡️</span>
            <span class="workout__value">${workout.speed.toFixed(1)}</span>
            <span class="workout__unit">km/h</span>
          </div>
          <div class="workout__details">
            <span class="workout__icon">⛰</span>
            <span class="workout__value">${workout.elevationGain}</span>
            <span class="workout__unit">m</span>
          </div>
        </li>`;
    }

    form.insertAdjacentHTML('afterend', html); // dodajemy do html
  }

  _moveToPopup(e) {
    // tam gdzue klikniemy tam nas przeniesie
    const workoutEl = e.target.closest('.workout'); // wyszuka najblizsza klase .workout
    if (!workoutEl) return;

    const workout = this.#workouts.find(x => x.id === workoutEl.dataset.id); // ze wszystkich workout znajdzie ten z odpowiednim datasetem
    this.#map.setView(workout.coords, this.#mapzoomlevel, {
      // funckja ktora ustawi nam z animacja
      animate: true,
      pan: { duration: 1 },
    });
  }

  _setLocalStorage() {
    localStorage.setItem('workouts', JSON.stringify(this.#workouts)); //setujemy nasz local storage i zmieniamy go w stringa
  }
  _getLocalStorage() {
    const data = JSON.parse(localStorage.getItem('workouts')); //pobieramy nasz local storage i zmieniamy go ze stringa w object

    if (!data) return; // jesli nie ma daty to nic sie nie wydarzy
    this.#workouts = data; // przypisujemy date z local stroge do nasszych workouts
    this.#workouts.forEach(element => {
      this._renderWorkout(element); //dla kazdego elementu renderujemy workout po lewej
    });
  }

  reset() {
    // resetujemy nasz local storage
    localStorage.removeItem('workouts');
    location.reload();
  }
}

const app = new App(); // tworzymy nowa App
