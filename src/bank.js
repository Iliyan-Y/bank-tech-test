class Bank {
  constructor() {
    this.balance = 0.0;
    this.statement = [];
  }

  deposit(amount) {
    this.balance += amount;
  }

  withdraw(amount) {
    this.balance -= amount;
  }

  printStatement() {
    return 'date || credit || debit || balance';
  }
}
