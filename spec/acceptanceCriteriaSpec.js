describe('Acceptance criteria', () => {
  it('Run the acceptance criteria test ', () => {
    let bank = new Bank();
    bank.deposit(1000);
    bank.deposit(2000);
    bank.withdraw(500);
    expected =
      'date || credit || debit || balance\n05/10/2020|| || 500.00 || 2500.00\n05/10/2020 || 2000.00 || || 3000.00\n05/10/2020 || 1000.00 || || 1000.00';

    expect(bank.printStatement()).toEqual(expected);
  });
});
