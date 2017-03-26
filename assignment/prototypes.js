function Animal(first, last, type) {
    this.firstName = first;
    this.lastName = last;
    this.type = type;
}

// here's an example Animal:
var giantCactus = new Animal( "Giant", "Cactus", "Dog" );

// PART 1
// create a new animal named "somethingFun" with a first name of "Something" a last name of "Fun" and a type of "Cat"
var somethingFun = new Animal("Something", "Fun", "Cat");

// PART 2
// Complete this function so that it will log the first and last name of
// an Animal object that is passed to it.
function animalFirstandLastName(animalObject){
// console log out somethingFun's first name here:
console.log(animalObject.firstName);

// console log out somethingFun's last name here:
console.log(animalObject.lastName);
}



// PART 3 (Hard Mode)
// add a method to somethingFun named "meow()" that console logs "moew" when called. ex: somethingFun.meow()
somethingFun.meow = function() {
  console.log('meow');
};

somethingFun.meow();

// add another method to somethingFun named "isHappy" that receives a boolean argument "happy"
// within this method, check if "happy" is true
// if so, console log "purr"
// if not, console log "crabby face"
somethingFun.isHappy = function(happy) {
  if(happy){
    console.log('purr');
  }else{
    console.log('crabby face');
  }
};

somethingFun.isHappy(true);
somethingFun.isHappy(false);
