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
/*
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

*/

// activity -------

/*
const employeeData = {
  John: 100,
  Pete: 300,
  Mary: 250,
};

class Util {
  data;

  constructor(data) {
    this.data = data;
  }

  sumSalaries() {
    const allvalues = Object.values(this.data);

    let sum = 0;
    for (let i = 0; i < allvalues.length; i++) {
      sum += allvalues[i];
    }

    return sum;
  }

  averageSalaries() {
    const totalSalary = this.sumSalaries();
    const totalNumberOfEmployee = Object.keys(this.data).length;

    return totalSalary / totalNumberOfEmployee;
  }

  findSalaryRange() {
    const allvalues = Object.values(this.data).sort((a, b) => a - b); // ascending order
    const maxSalary = allvalues[allvalues.length - 1];
    const minSalary = allvalues[0];

    return maxSalary - minSalary;
  }
}

const util = new Util(employeeData);

console.log(util.averageSalaries());
console.log(util.sumSalaries());
console.log(util.findSalaryRange());


*/

//  ------------------------- Inheritance --------------

/*
class Parent {
  name;
  properties = 12;

  constructor(name) {
    this.name = name;
  }

  sum() {
    console.log("sum");
  }

  livingLife() {
    console.log("living life");
  }
}

const parent1 = new Parent("parent1");
console.log(parent1);
/*

// extends -> it helps in inheritance.
// super -> keyword points to its PARENT Class
// this -> keyword points to its own Class

// CHild class is a DERIVED class OF PARENT CLASS.

/*
class Child extends Parent {
  name;
  toys = 10;

  constructor(name, parentName) {
    super(parentName); // super means -> Parent class AND super() -> calling constructor of PARENT
    this.name = name;
  }

  badHabits() {
    console.log("bad habits");
  }

  screenTime() {
    console.log("100 hrs of instagram");
  }
}

const child = new Child("child1", "asdas");
console.log(child);

child.livingLife();
child.screenTime();

*/

// ------------------------  Method Overrriding ---------

/*
// Parent class
class Student {
  fullName;
  constructor(name) {
    this.fullName = name;
  }
  markAttendance() {
    console.log(this.fullName, "Hey I am present in CLASS ");
  }

  book() {
    console.log("books");
  }
}

class SportsCaptain extends Student {
  constructor(name) {
    super(name);
  }

  markAttendance() {
    console.log("Sports Captain " + this.fullName + " is present");
  }

  playFootball() {
    console.log(this.fullName, "is playing football");
  }
}

const utkasrh = new Student("utkarsh");
console.log(utkasrh);

utkasrh.markAttendance();

const virat = new SportsCaptain("virat");
console.log(virat);

virat.markAttendance();
virat.asdasdas();

*/

// Acitivity - Office

class Employee {
  name;
  department;

  constructor(name, department) {
    this.name = name;
    this.department = department;
  }

  markPresent() {
    console.log(this.name + " is present");
  }
  getRole() {
    console.log("employee of office");
  }
}

class Developer extends Employee {
  prefLanguage;

  constructor(name, prefLanguage) {
    super(name, "Engineering");

    this.prefLanguage = prefLanguage;
  }

  submitCode() {
    console.log(`Code submitted by ${this.name} from CBC`);
  }

  getRole() {
    console.log("works with  " + this.prefLanguage);
  }
}

const utkarsh = new Developer("utkarsh", "java");
console.log(utkarsh);
utkarsh.markPresent();
utkarsh.submitCode();

utkarsh.getRole();
