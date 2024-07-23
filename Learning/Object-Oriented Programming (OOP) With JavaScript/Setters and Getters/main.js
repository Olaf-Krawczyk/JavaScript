const account = {
  owner: "Jack",
  movements: [100, 200, 300],
  get latest() {
    return this.movements[2];
  },

  set latest(mov) {
    this.movements.push(mov);
  },
};

console.log(account.latest);

account.latest = 69;

console.log(account.movements);

class Person {
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }

  get greet() {
    console.log(`Hello ${this.firstName}`);
  }

  set firstName(name) {
    if (name.includes(" ")) {
      this._fullName = name;
    } else {
      console.log(`DONT WORK`);
    }
  }

  get firstName() {
    return this._fullName;
  }
}

const jack = new Person("Jack S", 1000);

jack.greet;
