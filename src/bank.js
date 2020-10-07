class Bank {
  constructor(transaction = Transaction) {
    this.balance = 0.0;
    this.statement = [];
    this.transaction = transaction;
  }

  deposit(amount) {
    this.balance += amount;
    let transaction = new this.transaction(this._formatBalance(amount), '');
    this._saveTransaction(transaction);
  }

  withdraw(amount) {
    this.balance -= amount;
    this._saveTransaction(
      new this.transaction('', this._formatBalance(amount))
    );
  }

  printStatement() {
    let format = 'date || credit || debit || balance';
    let reverseOrder = this.statement.reverse();
    let output = format + this._renderStatement(reverseOrder);
    console.log(output);
    return output;
  }

  // helpers

  _saveTransaction(transaction) {
    this.statement.push({
      transaction,
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
