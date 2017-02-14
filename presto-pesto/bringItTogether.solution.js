// Modeled after Tier 2 Bonus Calculator challenge. Convert arrays of rooms to Room objects
convertRooms();

function convertRooms() {
  // [seats needed, rollingChairs, cubes, color of seats]
  var roomsArray = [[20, 14, 12, 'red'], [24, 10, 40, 'blue'], [23, 18, 30, 'black'], [18, 13, 13, 'blue']];

  for(var i = 0; i < roomsArray.length; i++) {
    var room = new Room(roomsArray[i]);
    console.log('new room: ', room);
  }

}

/**
 * Represents a classroom at Prime
 * @constructor
 * @param {Array} array - a single room array of data
**/
function Room(array) {
  this.capacity = array[0];
  this.rollingChairs = [];
  // array[1] is a our number of chairs
  for(var j = 0; j < array[1]; j++) {
    this.rollingChairs.push(new RollingChair('rolling', array[3]));
  }
  this.cubes = [];
  // array[2] is a number of cubes
  for(j = 0; j < array[2]; j++) {
    this.cubes.push(new Cube(24));
    // console.log('cube vol: ', this.cubes[j].volume());
  }
}

/**
 * Represents a Rolling Chair seat
 * @constructor
 * @param {String} type - type of seat this is
 * @param {String} color - color of the seat fabric
**/
function RollingChair(type, color) {
  this.type = type;
  this.color = color;
}

/**
 * Represents a Cube seat
 * @constructor
 * @param {String} length - length of each side
 * @property {Function} volume - method that calculates the volume of the cube
**/
function Cube(length) {
  this.length = length;
  this.volume = function() {
    return Math.pow(this.length, 3);
  };
}

// Export for running tests
module.exports = {
  Room: Room,
  convertRooms: convertRooms,
  RollingChair: RollingChair,
  Cube: Cube
};
