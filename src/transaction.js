class Transaction {
  constructor(credit) {
    this.date = new Date().toISOString().split('T')[0];
    this.credit = credit;
  }
}
