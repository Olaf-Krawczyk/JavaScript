function Person(firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
}

const variable = new Person("Jonas", 1991);
const variable2 = new Person("Jonass", 1991);
const variable3 = new Person("Jonasss", 1991);

console.log(variable, variable2, variable3);

console.log(variable instanceof Person);
