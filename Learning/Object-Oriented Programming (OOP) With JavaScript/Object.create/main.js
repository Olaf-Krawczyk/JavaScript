const PersonProto = {
  calcAge() {
    console.log(2024 - this.birthYear);
  },
};

const jack = Object.create(PersonProto);

jack.birthYear = 2000;

jack.calcAge();
