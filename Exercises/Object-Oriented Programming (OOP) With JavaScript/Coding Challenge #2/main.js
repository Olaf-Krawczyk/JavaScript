class CarCl {
  constructor(brandName, speed) {
    this.brandName = brandName;
    this.speed = speed;
  }

  get speedUs() {
    return this.speed / 1.6;
  }

  set speedUs(fullSpeed) {
    this.speed = fullSpeed * 1.6;
  }

  break() {
    return this.speed - 5;
  }

  gas() {
    return this.speed + 10;
  }
}

const bmw = new CarCl("BMW", 120);

bmw.speedUs = 50;

console.log(bmw);

const volvo = new CarCl("VOLVO", 120);

console.log(volvo.break());

console.log(volvo.gas());
