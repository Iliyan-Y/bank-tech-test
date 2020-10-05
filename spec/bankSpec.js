describe('Player', function () {
  var bank;

  beforeEach(function () {
    bank = new Bank();
  });

  it('should be able to play a Song', function () {
    expect(typeof bank.banalce).toEqual('number');
  });
});
