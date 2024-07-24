const PersonProto = {
  calcAge() {
    console.log(2024 - this.brithYear);
  },

  init(firstName, brithYear) {
    this.firstName = firstName;
    this.brithYear = brithYear;
  },
};

const StudentProto = Object.create(PersonProto);

const jay = Object.create(StudentProto);
