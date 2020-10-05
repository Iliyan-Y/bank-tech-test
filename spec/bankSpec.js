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
        `\n${bank._formatDate(
          transaction.date
        )} || ${transaction.credit.toFixed(2)} || ${
          transaction.debit
        } || ${transaction.balance.toFixed(2)}`;

      bank.deposit(1000.0);
      expect(bank.printStatement()).toEqual(expected);
    });

    it('Prints out the statement with one debit', () => {
      let transaction = {
        date: new Date().toISOString().split('T')[0],
        credit: '',
        debit: 100,
        balance: -100,
      };

      let expected =
        format +
        `\n${bank._formatDate(transaction.date)} || ${
          transaction.credit
        } || ${transaction.debit.toFixed(2)} || ${transaction.balance.toFixed(
          2
        )}`;

      bank.withdraw(100);
      expect(bank.printStatement()).toEqual(expected);
    });
  });

  describe('_formatDate', () => {
    it('formate the date in the required way', () => {
      let date = '2020-10-05';
      expect(bank._formatDate(date)).toEqual('05/10/2020');
    });
  });

  describe('_formatBalance', () => {
    it('formate the balance in the required way', () => {
      expect(bank._formatBalance(500)).toEqual('500.00');
    });
  });
});
