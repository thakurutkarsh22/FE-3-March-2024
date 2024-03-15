//

const obj = {
  a: 1,
  b: 2,
  c: 3,
};

// a b c are OWN values

// In JS if you want to know who are your OWN properties you ll use

// Object.prototype.d = 100;

//NOTE: PAINFUL -> remember this is IMPORTANT.

// for in -> keys (any object)
for (const key in obj) {
  if (Object.hasOwnProperty.call(obj, key)) {
    console.log(key, "key in for in");
  }
}

// for of -> values (ITerable object/arrays)

console.log(obj);

const keyValuePair = Object.entries(obj);
console.log(keyValuePair); // key value pair in array.

const allKeys = Object.keys(obj);
console.log(allKeys); // all the keys

const allvalues = Object.values(obj);
console.log(allvalues); // all the Values
