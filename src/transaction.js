class Transaction {
  constructor() {
    this.date = new Date().toISOString().split('T')[0];
  }
}
