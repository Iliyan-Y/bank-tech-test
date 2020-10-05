class Bank {
  constructor() {
    this.balance = 0.0;
    this.statement = [];
  }

  deposit(amount) {
    this.balance += amount;
    this._saveTransaction(this._formatBalance(amount), '', this.balance);
  }

  withdraw(amount) {
    this.balance -= amount;
    this._saveTransaction('', this._formatBalance(amount), this.balance);
  }

  printStatement() {
    let format = 'date || credit || debit || balance';
    let reverseOrder = this.statement.reverse();
    return format + this._renderStatement(reverseOrder);
  }

  // helpers

  _saveTransaction(credit, debit, balance) {
    this.statement.push(
      new Transaction(credit, debit, this._formatBalance(balance))
    );
  }

  _renderStatement(statement) {
    let output = statement.map((each) => {
      return `\n${this._formatDate(each.date)} || ${each.credit} || ${
        each.debit
      } || ${each.balance}`;
    });
    return output.join('');
  }

  _formatDate(date) {
    date = date.split('-');
    return date[2] + '/' + date[1] + '/' + date[0];
  }

  _formatBalance(balance) {
    return balance.toFixed(2);
  }
}
