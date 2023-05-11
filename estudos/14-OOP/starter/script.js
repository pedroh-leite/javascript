'use strict';

const Person = function(firstName, birthYear) {
    //Instance properties
    this.firstName = firstName;
    this.birthYear = birthYear;

    //Never to this
    //  this.calcAge 
}

const jonas = new Person("Jonas", 1991);
console.log(jonas);

//1. New {} is created
//2. Function is called, this = {}
//3. {} linked to prototype
//4. Function automatically return {}

const matilda = new Person("Matilda", 2017);
const jack = new Person("Jack", 1975);
console.log(matilda, jack);

console.log(jonas instanceof Person);

Person.hey = function() {
    console.log("Hey there!!");
    console.log(this)
}

Person.hey();


/*
//Prototypes
console.log(Person.prototype)

Person.prototype.calcAge = function() {
    console.log(2037 - this.birthYear)
};

jonas.calcAge();
matilda.calcAge();


console.log(jonas.__proto__);
console.log(jonas.__proto__ === Person.prototype);

console.log(Person.prototype.isPrototypeOf(jonas));
console.log(Person.prototype.isPrototypeOf(matilda));
console.log(Person.prototype.isPrototypeOf(Person));

// .prototypeOfLinkedObjects

Person.prototype.species = "Homo-sapiens";
console.log(jonas.species, matilda.species);

console.log(jonas.hasOwnProperty("firstName"));
console.log(jonas.hasOwnProperty("species"));

console.log(jonas.__proto__);
//Object.prototype (Top of prototype chain)
console.log(jonas.__proto__.__proto__);
console.log(jonas.__proto__.__proto__.__proto__);

console.dir(Person.prototype.constructor);

const arr = [3, 6, 4, 5, 6, 9, 3];
console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype);

console.log(arr.__proto__.__proto__);

Array.prototype.unique = function(){
   return [...new Set(this)];
};

console.log(arr.unique());

const h1 = document.querySelector("h1");
console.dir(x => x + 1);


/////////////////////////////////////////////////
//Chalenge 1

const Car = function(make, speed) {
    this.make = make;
    this.speed = speed;
};

Car.prototype.accelerate = function() {
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed} km/h`);
}

Car.prototype.brake = function() {
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed} km/h`);
}

const bmw = new Car("BMW", 120);
const mercedes = new Car("Mercedes", 95);

bmw.accelerate();
bmw.accelerate();
bmw.brake();
bmw.accelerate();
*/

//Class expression
// const PersonCl = class {}

//Class declaration
class PersonCl {
    constructor(fullName, birthYear) {
        this.fullName = fullName;
        this.birthYear = birthYear;
    }

    // Instance method
        // Methods will be added to .prototype property
    calcAge() {
        console.log(2037 - this.birthYear);
    }

    greet(){
        console.log(`Hey ${this.firstName}`);
    }

    get age() {
        return 2037 - this.birthYear
    }

        // Set a property that already exists
    set fullName(name) {
        console.log(name)
        if(name.includes(" ")) this._fullName = name;
        else alert(`${name} is not a full name!`)
    }

    get fullName() {
        return this._fullName;
    }

        // Static method
    static hey(){
        console.log("Hey there!!");
    }
}

const jessica = new PersonCl("Jessica Davis", 1996);
console.log(jessica);
jessica.calcAge();
console.log(jessica.age);

console.log(jessica.__proto__ === PersonCl.prototype);

// PersonCl.prototype.greet = function() {
//     console.log(`Hey ${this.firstName}`);
// };
jessica.greet();

//1. Classes aren't hoisted
//2. Classes are first-class citizes
//3. Classes are executed in strict mode

const walter = new PersonCl("Walter White", 1965);

PersonCl.hey();

///////////////////////////////////////////
// Setters and getters
/*
const account = {
    owner: "Jonas",
    movements: [200, 530, 120, 300],

    get latest() {
        return this.movements.slice(-1).pop();
    },

    set latest(mov) {
        this.movements.push(mov);
    },

};

console.log(account.latest);


account.latest = 50;
console.log(account.movements);
*/

const PersonProto = {
    calcAge() {
        console.log(2037 - this.birthYear);
    },

    init(fisrtName, birthYear){
        this.firstName = fisrtName;
        this.birthYear = birthYear;
    },
};

const steven = Object.create(PersonProto);
console.log(steven);

steven.name = "Steven";
steven.birthYear = 2002;
steven.calcAge();

console.log(steven.__proto__ === PersonProto);

const sarah = Object.create(PersonProto);
sarah.init("Sarah", 1979);
sarah.calcAge();

//////////////////////////////////////////////////////
//Chalenge 2

class CarCl { 
    constructor (make, speed) {
    this.make = make;
    this.speed = speed;
}

accelerate(){
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed} km/h`);
}

brake(){
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed} km/h`);
}

get speedUS() {
    return this.speed / 1.6; 
}

set speedUS(speed) {
    this.speed = speed * 1.6;
}
};

 const ford = new CarCl("Ford", 120);
console.log(ford.speedUS);
 ford.accelerate();
 ford.accelerate();
 ford.brake();
 ford.speedUS = 50;
 console.log(ford)