describe('promode Testing the Classroom Builder Application', function() {
  describe('the Room constructor function', function() {
    describe('returned object has a property called: capacity', function() {
      it('should have a property capacity', function() {
        var room = convertRooms([2, 1, 1, 'red']);
        chai.expect(room).to.have.ownProperty('capacity');
      });

      it('capacity should match the number given in constructor', function() {
        var room = new Room(2);
        chai.expect(room.capacity).to.be.equal(2);
      });
    });

    describe('returned object has a property called: rollingChairs', function() {
      it('should have a property rollingChairs', function() {
        var room = convertRooms([2, 1, 1, 'blue']);
        chai.expect(room).to.have.ownProperty('rollingChairs');
      });

      it('rollingChairs should be an array of objects', function() {
        var room = convertRooms([10, 3, 7, 'neon']);
        chai.expect(room.rollingChairs).to.be.instanceof(Array);
        chai.expect(room.rollingChairs[0]).to.be.instanceof(Object);
      });

      it('rollingChairs length should match given array[1]', function() {
        var room = convertRooms([8, 4, 4, 'maroon']);
        chai.expect(room.rollingChairs).to.have.lengthOf(4);
      });
    });

    describe('returned object has a property called: cubes', function() {
      it('should have a property cube', function() {
        var room = convertRooms([2, 1, 1, 'blue']);
        chai.expect(room).to.have.ownProperty('cubes');
      });

      it('cubes should be an array of objects', function() {
        var room = convertRooms([6, 2, 4, 'red']);
        chai.expect(room.cubes).to.be.instanceof(Array);
        chai.expect(room.cubes[0]).to.be.instanceof(Object);
      });

      it('cubes length should match given array[2]', function() {
        var room = convertRooms([30, 13, 17, 'firetruck red']);
        chai.expect(room.cubes).to.have.lengthOf(17);
      });
    });
  }); // end Room constructor tests

  describe('the Cube constructor function', function() {
    it('should have a property "length"', function() {
      var cube = new Cube(18);
      chai.expect(cube).to.have.ownProperty('length');
    });

    it('should have a method "volume" that returns the volume', function() {
      var cube = new Cube(4);
      //Does it have the volume method:
      expect(cube).to.respondTo('volume');

      //Does volume method work:
      chai.expect(cube.volume()).to.be.equal(64);
    });
  });

  describe('the RollingChair constructor function', function() {
    describe('returned object has a property called: color', function() {
      it('should have a string property of type', function() {
        var chair = new RollingChair('rolling', 'yellow');
        chai.expect(chair).to.have.ownProperty('type');
        chai.expect(chair.type).to.be.equal('rolling');
      });

      it('should have a string property of color', function() {
        var chair = new RollingChair('rolling', 'yellow');
        chai.expect(chair).to.have.ownProperty('type');
        chai.expect(chair.color).to.be.equal('yellow');
      });
    });
  });

  describe('the room array converter', function() {
    it('should return an array of Objects', function() {
      var newRooms = convertRoomsList(roomsArray); // defined in the assignment file

      // fix this test
      chai.expect(newRooms).to.be.instanceof(Array);
      chai.expect(newRooms[0]).to.be.instanceof(Object);
      chai.expect(newRooms[1]).to.be.instanceof(Object);
      chai.expect(newRooms[2]).to.be.instanceof(Object);
      chai.expect(newRooms[3]).to.be.instanceof(Object);
    });

    it('should return array with length that matches given rooms array', function() {
      var testArray = [[21, 13, 13, 'orange'], [24, 10, 40, 'green'], [25, 10, 55, 'purplish orange']];
      var newRooms = convertRoomsList(testArray);
      chai.expect(newRooms).to.have.lengthOf(3);
    });

    // it('should call the convertRooms function', function() {
    //   var spy = sinon.spy(convertRooms);
    //   convertRoomsList(roomsArray);
    //   // chai.expect(room.cubes).to.be.instanceof(Array);
    //   // assert(spy.callCount).to.be.equal.equal(4)
    //   expect(spy).to.be.called;
    // });

    // });
  });
});
