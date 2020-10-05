class Bank {
  constructor() {
    this.balance = 0.0;
  }

  deposit(amount) {
    this.balance += amount;
  }
}
