describe('Bank', function () {
  var bank;
  let format = 'date || credit || debit || balance';

  beforeEach(function () {
    bank = new Bank(FakeTransaction);
    console.log = jasmine.createSpy('log');
  });

  describe('printStatement', () => {
    it('Prints out the stored history of the account', () => {
      expect(bank.printStatement()).toEqual(format);
      expect(console.log).toHaveBeenCalled();
    });

    it('Prints out the stored history of the account with one credit transaction', () => {
      let expected = format + `\n06/10/2020 || 1000.00 ||  || 1000.00`;

      bank.deposit(1000);
      expect(bank.printStatement()).toEqual(expected);
      expect(console.log).toHaveBeenCalled();
    });

    it('Prints out the statement with one debit', () => {
      let expected = format + `\n06/10/2020 ||  || 100.00 || -100.00`;
      bank.withdraw(100);
      expect(bank.printStatement()).toEqual(expected);
      expect(console.log).toHaveBeenCalled();
    });
  });
});
