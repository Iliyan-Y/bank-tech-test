describe('Bank', function () {
  var bank;

  beforeEach(function () {
    bank = new Bank();
  });

  describe('statement', () => {
    it('Store the history of the account', () => {
      expect(bank.statement).toEqual([]);
    });
    it('Adds new transaction in to the statement history on each deposit', () => {
      bank.deposit(40);
      expect(bank.statement.length > 0).toBe(true);
    });
    it('Adds new transaction in to the statement history on each withdraw', () => {
      bank.withdraw(40);
      expect(bank.statement.length > 0).toBe(true);
    });
  });

  describe('printStatement', () => {
    let format = 'date || credit || debit || balance';

    it('Prints out the stored history of the account', () => {
      expect(bank.printStatement()).toEqual(format);
    });

    it('Prints out the stored history of the account with one credit transaction', () => {
      let transaction = {
        date: '2020-10-06',
        credit: '1000.00',
        debit: '',
      };

      let expected = format + `\n06/10/2020 || 1000.00 ||  || 1000.00`;

      bank.statement.push({
        transaction,
        currentBalance: '1000.00',
      });
      expect(bank.printStatement()).toEqual(expected);
    });

    it('Prints out the statement with one debit', () => {
      let transaction = {
        date: '2020-10-06',
        credit: '',
        debit: '-100.00',
      };

      let expected = format + `\n06/10/2020 ||  || -100.00 || -100.00`;

      bank.statement.push({
        transaction,
        currentBalance: '-100.00',
      });

      expect(bank.printStatement()).toEqual(expected);
    });
  });
});
