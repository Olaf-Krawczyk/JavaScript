function Car(make, speed) {
  this.make = make;
  this.speed = speed;
}

const car1 = new Car(`BMW`, 120);

console.log(car1);

Car.prototype.accelerate = function () {
  return console.log(this.speed + 10);
};

Car.prototype.break = function () {
  return console.log(this.speed - 5);
};

car1.accelerate();
car1.break();
