// OOPS -> Object oriented programming..

// ------- Objects -----------

/*
const person = {
  name: "utkarsh",
  standard: 12,

  canWalk: function () {
    console.log("yes I can walk");
  },
};

console.log(person.name, "dot notation");
console.log(person["name"]);

// Object destructuring
const { standard } = person;

console.log(standard);
*/

// ------------------- Classes ----------------------

/*
const utkarshObject = {
  name: "utkarsh",
  standard: 12,
  rollNumber: 99,

  canWalk: function () {
    console.log("yes I can walk");
  },
};

const akashObject = {
  name: "akash",
  standard: 11,
  rollNumber: 1,

  canWalk: function () {
    console.log("yes I can walk");
  },
};

const koreanGuyObject = {
    name: "akash",
    standards: 11,
    rollNumber: 1,
  
    canWalk: function () {
      console.log("yes I can walk");
    },
  };

  */

//   schema

/*
class Person {
  // properties ---
  planet;
  name;
  standard;
  rollNumber;

  //   PARAMETERIZED CONSTRUCTOR
  constructor(name, stand, rolNo) {
    // this -> class Person

    this.planet = "Earth";
    this.name = name;

    this.standard = stand;
    this.rollNumber = rolNo;
  }

  //   DEFAULT CONSTRUCTOR (JS add this )
  //   constructor() {

  //   }

  //   INSIDE JS WE CANT HAVE MULTIPLE CONSTRUCTOR AT A TIME.

  // ------   method----
  canWalk() {
    // this ->class Person
    console.log(`${this.name} can walk`);
  }
}

const utkasrhObject = new Person("utkarsh", 12, 67, "asdas", "asdasd", "asdsa");
const akashPerson = new Person("akash", 11, 1);
const koreanPerson = new Person("korean", 8);

// utkasrhObject.name;
// utkasrhObject.dance = "no";
// utkasrhObject.canWalk();
// akashPerson.canWalk();

delete utkasrhObject.standard;

console.log(utkasrhObject);
console.log(akashPerson);
console.log(koreanPerson);

*/

// ------------ ----- CONSTRUCTOR FUNCTION ---------------

/*
function Person1(name, stand, rolNo) {
  // this -> class Person

  this.planet = "Earth";
  this.name = name;

  this.standard = stand;
  this.rollNumber = rolNo;

  this.canWalk = function () {
    console.log(`${this.name} can walk`);
  };
}

const arun = new Person1("arun", 99, 99);
const arun2 = new Person1("arun2", 99, 99);
const arun3 = new Person1("arun3", 99, 99);
console.log(arun);
console.log(arun2);
console.log(arun3);
arun.canWalk();

// THE MAJOR DIFFERENCE  is with CONSTRUCTOR FUNCTION new methods are created for that
// perticular object.

*/

// --------------- FEAR OF THIS KEYWORD -----------------

// callsite

/*
function sum() {

}

const copySum = sum; // this is NOT A CALL SITE

copySum() // CALL SITE

// if you want to determine value of this keyword 
// it can be determined by CALL SITE ONLY.

*/

// ---------------- rule 1: default binding.
// "use strict";
/*
function sum() {
  // context -> this -> window / undefined
  console.log(this, "adsad"); // window / undefined (for strict mode)
}

sum(); // is this call site ? YES
// DO I have any extra information ? NO

*/

//------------ RULE 2 -> Implicit binding (JS itself determines the Context) ---------------

// EXAMPLE 1:
/*
let obj = {
  name: "utkarsh",
  standard: 9,
  func: function () {
    // context -> this -> obj
    console.log(this, "func");
  },
};

obj.func(); // is this a call site ? YES
// DO I have any extra information ? YES (obj)

*/

// EXAMPLE 2:

/*
let obj2 = {
  name: "akash",
  func: function () {
    // context -> this -> obj2
    console.log(this.name);
  },
};

let obj = {
  name: "ankit",
  obj2: obj2,
};

obj.obj2.func(); // akash // is this a call site ? YES
// DO I have any extra information ? YES (obj)

*/

// EXAMPLE 3
/*
let obj = {
  name: "akash",
  func: function () {
    // context - this  -> window
    // console.log("hello");
    console.log(this); //
    console.log(this.name);
  },
};

setTimeout(obj.func, 3000); //  is this a call site ? NO

// BROWSER PEOPLE
// function setTimeout(callBack, delay) {
//   // delay it for delay seconds

//   callBack(); // is this call site for func function ? YEs
//   // ANy extra info? NO
// }

*/

// ---------- RULE 3 Explicit Binding  -------------

// 1. call
// 2. apply
// 3. bind
/*
let obj2 = {
  name: "akash",
  func: function (a, b, c) {
    // context -> this -> utkarshPerson
    console.log("hello");
    console.log(this.name);
    // console.log(this.name, a, b, c);
  },
};

let obj = {
  name: "ankitsss",
  obj2: obj2,
};

let utkarshPerson = {
  name: "utkarsh",
};

obj.obj2.func(9, 9); //  akash   // is thsi a call site ? // YES

obj.obj2.func.call(obj, 123, 12, 66); // ankitsss
// obj.obj2.func.apply(obj, [123, 12, 66]); // ankitsss

// obj.obj2.func();

const bindedFunction = obj.obj2.func.bind(utkarshPerson);

/*
func:

function (a, b, c) {
    // context -> this -> utkarshPerson
    console.log("hello");
    console.log(this.name);
    // console.log(this.name, a, b, c);
  },


*/

/*
setTimeout(bindedFunction, 3000); //

function setTimeout(callBack, delay) {
  // delay it for delay seconds

  callBack(); // is this call site for func function ? YEs
  // ANy extra info? NO
}

*/

// ------------- Rule 4-> New Keyword --------------

/*
class Car {
  // context -> this -> new -> {}
  constructor(model, color) {
    this.model = model;
    this.color = color;
  }

  start() {

  }
}

const wanagr = new Car("w8", "green"); {}

*/

/*
function Car(model, color) {
  // context -> this -> new -> {}
  this.model = model;
  this.color = color;

  this.start = function () {
    // contex - this -> ferrari
    console.log("car is in start mode " + this.model);
  };
}

const ferrrari = new Car("v8", "red");
console.log(ferrrari);

ferrrari.start();

*/

// new keyword -> {},
// and this blank object is given to CLASSES and CONSTRUCTOR FUNCTION as the CONTEXT(this).

// RULE PRECEDENCE -----------> Increasing power

// default binding <<<< Implicit <<<<<< Explicit<<<<< new

/// ---- activity

/*
function Circle(radius, location) {
  this.radius = radius;
  this.location = location;

  this.draw = function () {
    console.log(this.location);
  };

  this.move = function (nextX, nextY) {
    this.location = {
      x: nextX,
      y: nextY,
    };
  };
}

const circle = new Circle(10, { x: 10, y: 10 });
console.log(circle);

circle.draw();
circle.move(100, 200);
circle.draw();
*/

// ---- activity

function User(fullName) {
  this.fullName = fullName;
  this.friendList = [];

  this.addFriend = function (addFriend) {
    this.friendList.push(addFriend);
  };

  this.printFriendList = function () {
    console.log(this.friendList);
  };

  this.findMutualsWith = function (userObj) {
    // context -> this -> utkarshObj
    const person1FriendList = this.friendList;
    const person2FrientList = userObj.friendList;

    const filterdList = person1FriendList.filter((item) =>
      person2FrientList.includes(item)
    );

    return filterdList;
  };
}

const utkarshUser = new User("utkarsh");
const nitinUser = new User("Nitin");

// add freids

utkarshUser.addFriend("animesh");
utkarshUser.addFriend("rishab");
utkarshUser.addFriend("ankit");

nitinUser.addFriend("rishab");
nitinUser.addFriend("vibhor");
nitinUser.addFriend("animesh");

const commonFriends = utkarshUser.findMutualsWith(nitinUser);

// console.log(utkarshUser);
console.log(commonFriends);
