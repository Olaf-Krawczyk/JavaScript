class Account {
  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.pin = pin;
    this.movements = [];
    this.locale = navigator.language;
  }

  deposit(value) {
    this.movements.push(value);
  }

  withdrawal(value) {
    this.deposit(-value);
  }

  approvedLoan() {
    return true;
  }

  reqLoan(value) {
    if (this.approvedLoan(value)) {
      this.deposit(value);
      console.log("APPROVED");
    }
  }
}

const accoun1 = new Account("Mark", "EUR", 1111);

accoun1.deposit(250);

accoun1.withdrawal(250);

accoun1.reqLoan(250);
