class Bank {
  constructor() {
    this.balance = 0.0;
    this.statement = [];
  }

  deposit(amount) {
    this.balance += amount;
    this.statement.push(
      new Transaction(
        this._formatBalance(amount),
        '',
        this._formatBalance(this.balance)
      )
    );
  }

  withdraw(amount) {
    this.balance -= amount;
    this.statement.push(
      new Transaction(
        '',
        this._formatBalance(amount),
        this._formatBalance(this.balance)
      )
    );
  }

  printStatement() {
    let format = 'date || credit || debit || balance';
    let output = this.statement.map((each) => {
      return `\n${this._formatDate(each.date)} || ${each.credit} || ${
        each.debit
      } || ${each.balance}`;
    });
    return format + output;
  }

  _formatDate(date) {
    date = date.split('-');
    return date[2] + '/' + date[1] + '/' + date[0];
  }

  _formatBalance(balance) {
    return balance.toFixed(2);
  }
}
