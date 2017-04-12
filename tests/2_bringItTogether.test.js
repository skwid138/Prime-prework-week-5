describe('promode bringItTogether.js', function() {
  describe('convertRooms()', function () {
    var room = convertRooms([2, 1, 3, 'red']);

    it('returns a room object with a property capacity with the expected value', function() {
      chai.expect(room).to.have.ownProperty('capacity');
      chai.expect(room.capacity).to.be.equal(2);
    });

    it('returns a room object with a property rollingChairs with an array containing the expected number of rollingChair objects', function() {
      chai.expect(room).to.have.ownProperty('rollingChairs');
      chai.expect(room.rollingChairs).to.have.lengthOf(1);
      room.rollingChairs.forEach(function (rollingChair) {
        chai.expect(rollingChair).to.be.instanceof(Object);
      });
    });

    it('returns a room object with a property cube with an array containing the expected number of cube objects', function() {
      chai.expect(room).to.have.ownProperty('cubes');
      chai.expect(room.cubes).to.have.lengthOf(3);
      room.cubes.forEach(function (cube) {
        chai.expect(cube).to.be.instanceof(Object);
      });
    });
  });

  describe('Room()', function () {
    var room = new Room(2);

    it('has a capacity property that matches the number given in constructor', function () {
      chai.expect(room.capacity).to.be.equal(2);
    });

    it('has a rollingChairs property that is an empty array', function () {
        chai.expect(room.rollingChairs).to.be.instanceof(Array);
        chai.expect(room.rollingChairs).to.have.lengthOf(0);
    });

    it('has a cubes property that is an empty array', function () {
        chai.expect(room.cubes).to.be.instanceof(Array);
        chai.expect(room.cubes).to.have.lengthOf(0);
    });
  });

  describe('Cube()', function() {
    it('has a property of length', function() {
      var cube = new Cube(18);
      chai.expect(cube).to.have.ownProperty('length');
    });

    it('has a volume method that returns the volume', function() {
      var cube = new Cube(4);
      //Does it have the volume method:
      expect(cube).to.respondTo('volume');

      //Does volume method work:
      chai.expect(cube.volume()).to.be.equal(64);
    });
  });

  describe('RollingChair()', function() {
    it('has a string property of type', function() {
      var chair = new RollingChair('rolling', 'yellow');
      chai.expect(chair).to.have.ownProperty('type');
      chai.expect(chair.type).to.be.equal('rolling');
    });

    it('has a string property of color', function() {
      var chair = new RollingChair('rolling', 'yellow');
      chai.expect(chair).to.have.ownProperty('color');
      chai.expect(chair.color).to.be.equal('yellow');
    });
  });

  describe('convertRoomsList()', function() {
    var testArray = [[21, 13, 13, 'orange'], [24, 10, 40, 'green'], [25, 10, 55, 'purplish orange']];

    it('returns an array of room objects', function() {
      var newRooms = convertRoomsList(testArray); // defined in the assignment file

      // fix this test
      chai.expect(newRooms).to.be.instanceof(Array);
      newRooms.forEach(function (newRoom) {
        chai.expect(newRoom).to.be.instanceof(Object);
      });
    });

    it('returns array with length that matches given rooms array', function() {
      var newRooms = convertRoomsList(testArray);
      chai.expect(newRooms).to.have.lengthOf(3);
    });

    it('calls the convertRooms function', function() {
      var spy = sinon.spy(convertRooms);
      convertRoomsList(testArray);
      chai.expect(spy).to.be.called;
    });
  });
});
