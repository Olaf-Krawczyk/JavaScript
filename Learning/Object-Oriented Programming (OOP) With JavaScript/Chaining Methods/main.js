class Account {
  #movements = [];
  constructor(test) {
    this.test = test;
  }

  deposit(val) {
    this.#movements.push(val);
    console.log(this);
    return this;
  }
}

const acc1 = new Account("jack");

acc1.deposit(20).deposit(30);
