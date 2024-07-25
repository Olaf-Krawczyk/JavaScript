class CarCl {
  constructor(brandName, speed) {
    this.brandName = brandName;
    this.speed = speed;
  }
}

class EVCl extends CarCl {
  #charge;
  constructor(brandName, speed, charge) {
    super(brandName, speed);
    this.#charge = charge;
  }

  accel(val) {
    this.speed += val;
    return this;
  }

  brake(val) {
    this.speed -= val;
    return this;
  }
}

const car1 = new EVCl("BWM", 120, 23);

car1.accel(20).accel(40).brake(50);
