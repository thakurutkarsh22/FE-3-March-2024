// OOPS -> FOCUS IS object.
// js -> is a functional language

// ----------- FUNCTIONS ---------------
// objects are {} , [],

// Function are Nothing but 1st class Objects.

/*
// function declaration
function sum1(a, b) {
  return a + b;
}

// function Expression
const sum = function (a, b) {
  return a + b;
};

console.log(sum1(1, 2)); // 3
console.log(sum(1, 3)); // 4

*/

// -------- SIDE EFFECT -----------------

// let aa = 12;
// function sum(a, b) {
//   aa = 11; // side effect
//   console.log("heloo"); // side effect
//   return a + b;
// }

// -------- PURE FUNCTION vs IMPURE FUNCTION ------------------

// Functions that have SIDE EFFECT are impure functions

/*
// impure function
let aa = 12;
function sum(a, b) {
  aa = 11; // side effect
  console.log("heloo"); // side effect
  return a + b;
}

// pure function
function sum2(a, b) {
  return a + b;
}

console.log(sum(1, 2));
console.log(sum2(1, 2));

*/

// ------------------ Declarative Programming vs Imperative Programming ---------
// Imperative Programming
// YOU ARE CARING FOR THE WORK AND WHOLE IMPLEMENTATION

/*
let arr = [1, 2, 3, 4, 5];
// answer = [2,4,6,8,10]

// HARD WORK
// 1. Travelling to EVERY ELEMENT

function doubleEveryElement(array) {
  let ansArray = [];
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    // ansArray.push(2 * element)
    ansArray[i] = 2 * element;
  }

  return ansArray;
}

console.log(doubleEveryElement(arr));
console.log(arr);

// Declarative Programming  (Delegation -> Manger approach in life -> kisi aur ko kaam de dia)

const myDemand = (item) => {
  return 3 * item;
};

const newArray = arr.map(myDemand);

console.log(newArray);
*/

//  ----------------------- MUTABLE (in english: changing) --------------------------

/*
const obj = {
  name: "utkarsh",
};

obj.name = "akash"; // mutating

const arr = [1, 2, 3, 4];

arr.push(5); // Mutation

*/

// ---------- In functional Programming ---------------
// -> Pure Function
// -> Declarative Programming
// -> STRICT RULE (React) -> DO NOT MUTATE

// --------------------- immutability RULES ---------------
// HOW TO MUTATE FOR  functional Programming.

/*
const obj1 = {
  name: "utkarsh",
  class: 9,
  age: 27,
  phone: "8822882291",
  address: {
    pincode: 110034,
    road: 44,
  },
};

// AS PER THE RULES OF functional Programming WE  SHOULD NOT MUTATE;

// obj1.phone = "asdasd" // this is not nICE .. SHould not be done...

// const copyObj1 = { ...obj1 }; // shallow copy
const copyObj1 = JSON.parse(JSON.stringify(obj1)); // DEEP COPY (NOT RECOMMENDED) always use some library
copyObj1.phone = "000000000";
copyObj1.address.pincode = 11001100;

console.log(obj1);
console.log(copyObj1);

*/

// ---------------------- HIGHER ORDER FUNCTION (HOF) -----------------------

// a function that ACCEPT a function as Parameter
// a function that RETURN a function
// or can do both

// set timeout is a HOF
// setTimeout(() => {}, 100);

/*
function add(a, b) {
  // logger.log("user  asdasdsa")
  console.log("user sum");
  return a + b;
}

function sub(a, b) {
  console.log("user sub");

  // logger.log("user asdasdasd")
  return a - b;
}

function mult(a, b) {
  console.log("user mult");

  // logger.log("user  asdasdasd")
  return a * b;
}


console.log(add(1, 3)); // 4
console.log(sub(1, 3)); // -2
console.log(mult(1, 3)); // 3

*/

// How many pure functio do you see? 0
// IMPURE FUNCTION: 3

/*
function add(a, b) {
  return a + b;
}

function sub(a, b) {
  return a - b;
}

function mult(a, b) {
  return a * b;
}

function caculateWithLogging(fn, a, b) {
  // logger.log("user + asdasdasd " + fn.__name__);
  console.log("user");
  return fn(a, b);
}

console.log(caculateWithLogging(add, 1, 3)); // 4
console.log(caculateWithLogging(sub, 1, 3)); // -2
console.log(caculateWithLogging(mult, 1, 3)); // 3

// How many pure functio do you see? 3
// IMPURE FUNCTION: 1

*/

// Activity .....

let todoDB = [];

function addTodo(arr, item, priority) {
  let arrCopy;
  if (priority == "high") {
    arrCopy = [item, ...arr];
  } else {
    arrCopy = [...arr, item];
  }

  return arrCopy;
}

function clearTodo(arr, index) {
  let copyArr = [...arr];
  copyArr[index] = null;
  return copyArr;
}

function updateTodo(arr, index, newItem) {
  let copyArr = [...arr];
  copyArr[index] = newItem;
  return copyArr;
}

function getTodo(arr, index) {
  if (index) {
    return arr[index];
  } else {
    return arr;
  }
}

todoDB = addTodo(todoDB, 10, "high"); // [10]
todoDB = addTodo(todoDB, 11, "high"); // [11, 10]
todoDB = addTodo(todoDB, 12, "high"); // [12, 11, 10]
todoDB = addTodo(todoDB, 13, "high"); // [13, 12, 11, 10]

todoDB = updateTodo(todoDB, 0, 9999);

console.log(todoDB);
