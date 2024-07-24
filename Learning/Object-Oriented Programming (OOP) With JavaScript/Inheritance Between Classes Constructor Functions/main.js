function Person(fristName, birthYear) {
  this.fristName = fristName;
  this.birthYear = birthYear;
}

function Student(fristName, birthYear, course) {
  Person.call(this.fristName, this.birthYear);
  this.course = course;
}

const mike = new Student("Mike", 2020, `IT`);

console.log(mike);

Student.prototype.introduce = function () {
  console.log(`My name is ${this.fristName}, ${this.birthYear} years old and i study ${this.course}`);
};

mike.introduce();
