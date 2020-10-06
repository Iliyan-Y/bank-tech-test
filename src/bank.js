class Bank {
  constructor() {
    this.balance = 0.0;
    this.statement = [];
  }

  deposit(amount) {
    this.balance += amount;
    this._saveTransaction(this._formatBalance(amount), '');
  }

  withdraw(amount) {
    this.balance -= amount;
    this._saveTransaction('', this._formatBalance(amount));
  }

  printStatement() {
    let format = 'date || credit || debit || balance';
    let reverseOrder = this.statement.reverse();
    return format + this._renderStatement(reverseOrder);
  }

  // helpers

  _saveTransaction(credit, debit) {
    this.statement.push({
      transaction: new Transaction(credit, debit),
      currentBalance: this._formatBalance(this.balance),
    });
  }

  _renderStatement(statement) {
    let output = statement.map((each) => {
      return `\n${this._formatDate(each.transaction.date)} || ${
        each.transaction.credit
      } || ${each.transaction.debit} || ${each.currentBalance}`;
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
