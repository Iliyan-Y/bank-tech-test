describe('Bank', function () {
  var bank;

  beforeEach(function () {
    bank = new Bank();
  });

  it('Initialize Bank class with float numerical balance', function () {
    expect(typeof bank.balance).toEqual('number');
  });

  describe('Deposit', () => {
    it('Increase the current balance', () => {
      bank.deposit(5);
      expect(bank.balance > 0).toBe(true);
    });
  });

  describe('withdraw', () => {
    it('Decrease the current balance', () => {
      bank.withdraw(5);
      expect(bank.balance < 0).toBe(true);
    });
  });

  describe('statement', () => {
    it('Store the history of the account', () => {
      expect(bank.statement).toEqual([]);
    });
  });

  describe('printStatement', () => {
    let format = 'date || credit || debit || balance';
    it('Prints out the stored history of the account', () => {
      expect(bank.printStatement()).toEqual(format);
    });

    it('Prints out the stored history of the account with one credit transaction', () => {
      let transaction = {
        date: new Date().toISOString().split('T')[0],
        credit: 1000.0,
        debit: '',
        balance: 1000.0,
      };

      let expected =
        format +
        `\n${transaction.date} || ${transaction.credit} || ${transaction.debit} || ${transaction.balance}`;

      bank.deposit(1000.0);
      console.log(bank.printStatement());
      expect(bank.printStatement()).toEqual(expected);
    });
  });
});
