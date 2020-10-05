class Transaction {
  constructor(credit, debit) {
    this.date = new Date().toISOString().split('T')[0];
    this.credit = credit;
    this.debit = debit;
  }
}
