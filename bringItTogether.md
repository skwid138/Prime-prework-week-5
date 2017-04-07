## Bring It Together: Classroom Builder Application (Pro Mode)

You've practiced your new skills with Arrays, Objects, Constructors, and Loops. Now it's time to put them all together!

With the business problem presented in this assignment, we will be a little closer to what it feels like to be in class or on the job as a developer. This type of problem will feel tough, so take your time with the problem and stretch what you know about JavaScript. Experiment as you work through the problem, we encourage you to rush to failure. Let us know where you get stuck because, as always, we are here to help.

## Instructions

### Input

Look at the code. You have been given an array of arrays. Each inner array describes a classroom:

* In the first position (or index) is the **total number of seats** needed.
* The second index represents how many **rolling office chairs** the room needs.
* Third is the **number of foam cubes** the room requires.
* Last is the **color** of fabric the seats should have.

### Output

Your job is to transform this starting data into *objects* and `console.log` the object out, one for each classroom. Each of these new objects will contain a number of properties:

* `capacity`: number of seats in the room
* `rollingChairs`: an array of objects describing a rolling office chair. See **Object Types** below for details about these chair objects.
* `cubes`: an array of objects describing a foam cube. See **Object Types** below for details about these cube objects.

Something like this:

```
var room = {
  capacity: 20,
  rollingChairs: [
    {RollingChair object}, {RollingChair object}, ...
  ],
  cubes: [
    {Cube object}, {Cube object}, ...
  ]
};
```

More details about the _RollingChair_ object and the _Cube_ object are given in the `bringItTogether.js` file in comments and in Doc Strings.

### Doc String

You will notice that these constructors are documented with a special comment syntax called a `docstring`. It looks like this:

```
/**
 * Represents a classroom at Prime
 * @constructor
 * @param {Array} array - a single room array of data
**/
```

It is a special type of comment block, meaning that it is not executable code. It contains the description of what the constructor does, a list of parameters, what they represent, and their types. Use this as additional information to help you understand what code you need to write.
