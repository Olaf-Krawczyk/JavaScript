const work = Array.from(document.querySelectorAll("h1"));

class Person {
  constructor(fullname) {
    this.fullname = fullname;
  }
  static hey() {
    console.log(this);
  }
}

Person.hey();
