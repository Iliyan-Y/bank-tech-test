describe('Transaction', function () {
  it('has date of creation', () => {
    let transaction = new Transaction();
    let expected = new Date().toISOString().split('T')[0];

    expect(transaction.date).toEqual(expected);
  });
});
