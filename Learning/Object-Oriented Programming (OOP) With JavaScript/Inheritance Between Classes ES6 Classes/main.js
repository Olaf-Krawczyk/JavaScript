class Person {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }
}

class Student extends Person {
  constructor(fullName, birthYear, course) {
    super(fullName, birthYear);
    this.course = course;
  }
}

const jack = new Student("Jack", 2020, "IT");
