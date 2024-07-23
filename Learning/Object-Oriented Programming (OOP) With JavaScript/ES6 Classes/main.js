class PersonCl {
  constructor(fristName, birthYear) {
    this.fristName = fristName;
    this.birthYear = birthYear;
  }

  calcAge() {
    console.log(2024 - this.birthYear);
  }
}

const jack = new PersonCl("Jack", 1999);

console.log(jack);

jack.calcAge();
