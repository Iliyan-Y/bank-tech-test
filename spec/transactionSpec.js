describe('Transaction', function () {
  it('has date of creation', () => {
    let transaction = new Transaction();
    let expected = new Date().toISOString().split('T')[0];
    expect(transaction.date).toEqual(expected);
  });

  it('has credit option amount field', () => {
    let transaction = new Transaction(5.0);
    expect(transaction.credit).toEqual(5.0);
  });

  it('has debit option amount field', () => {
    let transaction = new Transaction('', 6);
    expect(transaction.debit).toEqual(6);
  });

  it('has current balance field', () => {
    let transaction = new Transaction('', '', 20);
    expect(transaction.balance).toEqual(20);
  });
});
