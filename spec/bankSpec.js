describe('Player', function () {
  var bank;

  beforeEach(function () {
    bank = new Bank();
  });

  it('Initialize Bank class  with numerical balance', function () {
    expect(typeof bank.balance).toEqual('number');
  });
});
