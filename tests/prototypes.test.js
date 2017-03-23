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
    var logSpy = sinon.spy(console, "log");

    somethingFun.meow(); // doesn't return, but logs
    expect(logSpy).to.be.called;
    expect(logSpy.callCount).to.equal(1);
    expect(logSpy.args[0][0]).to.equal('meow');

    logSpy.restore();
  });

});

describe('basemode prototype answers', function() {

  it('should log the firstName and lastName properties of an animal object in 2 separate logs', function() {
    var logSpy = sinon.spy(console, "log");
    var daniel = {
      firstName : "Daniel",
      lastName : "Striped",
      type : "Tiger"
    }

    animalFirstandLastName(daniel); // doesn't return, but logs
    expect(logSpy).to.be.called;
    expect(logSpy.callCount).to.equal(2);
    expect(logSpy.args[0][0]).to.equal('Daniel');
    expect(logSpy.args[1][0]).to.equal('Striped');

    logSpy.restore();
  });


});

describe('hardmode prototype answers', function() {

  // call isHappy true
  it('should have an isHappy function that logs "purr" when given true', function() {
    var logSpy = sinon.spy(console, "log");

    somethingFun.isHappy(true); // call function with true
    expect(logSpy).to.be.called;
    expect(logSpy.callCount).to.equal(1);
    expect(logSpy.args[0][0]).to.equal('purr');

    logSpy.restore();
  });

  // call isHappy false
  it('should have an isHappy function that logs crabby face when given false', function() {
    var logSpy = sinon.spy(console, "log");

    somethingFun.isHappy(false); // call function with false
    expect(logSpy).to.be.called;
    expect(logSpy.callCount).to.equal(1);
    expect(logSpy.args[0][0]).to.equal('crabby face');

    logSpy.restore();
  });
});
