
var logSpy = sinon.spy(console, "log");

describe('basemode prototype answers', function() {
  // somethingFun exists, name somthing and fun w/type Cat
  it('animal somethingFun exists', function() {
    expect(somethingFun).to.exist;
    expect(somethingFun.firstName).to.equal('Something');
    expect(somethingFun.lastName).to.equal('Fun');
    expect(somethingFun.type).to.equal('Cat');
  });

  // call meow functtion
  it('somethingFun should have a meow function that logs meow', function() {
    somethingFun.meow(); // doesn't return, but logs
    expect(logSpy).to.be.called;
    expect(logSpy.callCount).to.equal(1);
    expect(logSpy.args[0][0]).to.equal('meow');
    logSpy.reset();
  });

});

// describe('basemode prototype answers', function() {
//   // var logSpy = sinon.spy(console, "log");
//   it('should log the name outside of anyFunction', function() {
//     somethingFun.meow(); // doesn't return, but logs
//     expect(logSpy).to.be.called;
//     expect(logSpy.callCount).to.equal(1);
//     expect(logSpy.args[0][0]).to.equal('meow');
//     logSpy.reset();
//   });
//
// });

describe('hardmode prototype answers', function() {
  // call isHappy true
  it('should have an isHappy function that logs purrrrrr when given true', function() {
    somethingFun.isHappy(true); // call function with true
    expect(logSpy).to.be.called;
    expect(logSpy.callCount).to.equal(1);
    expect(logSpy.args[0][0]).to.equal('purrrrrr');
    logSpy.reset();
  });

  // call isHappy false
  it('should have an isHappy function that logs crabby face when given false', function() {
    somethingFun.isHappy(false); // call function with false
    expect(logSpy).to.be.called;
    expect(logSpy.callCount).to.equal(1);
    expect(logSpy.args[0][0]).to.equal('crabby face');
    logSpy.restore();
  });
});
