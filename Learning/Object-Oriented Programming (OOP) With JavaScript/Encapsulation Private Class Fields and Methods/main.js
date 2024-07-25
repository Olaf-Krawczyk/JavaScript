class Account {
  //PUBLIC
  locale = navigator.language;
  //PRIVATE
  #movements = [];
  #pin;

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.#pin = pin;
  }

  //#PRIVATE
  #approvedLoan(val) {
    return true;
  }

  check() {
    if (this.#approvedLoan) {
      console.log("WORK");
    }
  }
}

const acc1 = new Account("Jack", "EUR", 1111);

acc1.check();
