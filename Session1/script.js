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

function sum() {
  // context -> this -> window / undefined
  console.log(this, "adsad"); // window / undefined (for strict mode)
}

sum(); // is this call site ? YES
// DO I have any extra information ? NO

//------------ RULE 2 -> Implicit binding ---------------

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
