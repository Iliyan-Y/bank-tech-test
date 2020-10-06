describe('Bank', function () {
  var bank;

  beforeEach(function () {
    bank = new Bank();
  });

  // describe('statement', () => {
  //   it('Store the history of the account', () => {
  //     expect(bank.statement).toEqual([]);
  //   });
  //   it('Adds new transaction in to the statement history on each deposit', () => {
  //     bank.deposit(40);
  //     expect(bank.statement.length > 0).toBe(true);
  //   });
  //   it('Adds new transaction in to the statement history on each withdraw', () => {
  //     bank.withdraw(40);
  //     expect(bank.statement.length > 0).toBe(true);
  //   });
  // });

  describe('printStatement', () => {
    let format = 'date || credit || debit || balance';

    it('Prints out the stored history of the account', () => {
      expect(bank.printStatement()).toEqual(format);
    });

    it('Prints out the stored history of the account with one credit transaction', () => {
      let expected = format + `\n06/10/2020 || 1000.00 ||  || 1000.00`;

      spyOn(bank, 'deposit').and.callFake(() => {
        bank.balance += 1000;
        bank._saveTransaction(new FakeTransaction('1000.00', ''));
      });
      bank.deposit(1000);
      expect(bank.printStatement()).toEqual(expected);
    });

    it('Prints out the statement with one debit', () => {
      let expected = format + `\n06/10/2020 ||  || 100.00 || -100.00`;
      spyOn(bank, 'withdraw').and.callFake(() => {
        bank.balance -= 100;
        bank._saveTransaction(new FakeTransaction('', '100.00'));
      });
      bank.withdraw(100);
      expect(bank.printStatement()).toEqual(expected);
    });
  });
});
