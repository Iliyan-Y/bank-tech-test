describe('Acceptance criteria', () => {
  it('Run the acceptance criteria test ', () => {
    let bank = new Bank();
    bank.deposit(1000);
    bank.deposit(2000);
    bank.withdraw(500);
    let date = new Date().toISOString().split('T')[0];
    let formateDate = bank._formatDate(date);
    expected = `date || credit || debit || balance\n${formateDate} ||  || 500.00 || 2500.00\n${formateDate} || 2000.00 ||  || 3000.00\n${formateDate} || 1000.00 ||  || 1000.00`;
    expect(bank.printStatement()).toEqual(expected);
  });
});
