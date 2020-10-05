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
      expect(bank.statement).toBe([]);
    });
  });
});
