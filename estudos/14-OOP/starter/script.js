'use strict';

/*
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
 console.log(ford);


 const Person = function(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
 };

 Person.prototype.calcAge = function() {
    console.log(2037 - this.birthYear);
 };

 const Student = function(firstName, birthYear, course) {
    Person.call(this, firstName, birthYear);
    this.course = course;
 };

//  Linking prototypes
Student.prototype = Object.create(Person.prototype)


 Student.prototype.introduce = function() {
    console.log(`My name is ${this.firstName} and i study ${this.course}`);
 };

 const mike = new Student ("Mike", 2020, "Computer science");
 console.log(mike);
 mike.introduce();
 mike.calcAge();

console.log(mike.__proto__);
console.log(mike.__proto__.__proto__);

console.log(mike instanceof Student);
console.log(mike instanceof Person);
console.log(mike instanceof Object);


Student.prototype.constructor = Student;
console.dir(Student.prototype.constructor);


////////////////////////////////////////////

const Car = function(make, speed) {
    this.make = make;
    this.speed = speed;
};

Car.prototype.accelerate = function() {
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed} km/h`);
};

Car.prototype.brake = function() {
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed} km/h`);
};

const EV = function(make, speed, charge) {
    Car.call(this, make, speed);
    this.charge = charge;
}

//Link prototypes
EV.prototype = Object.create(Car.prototype);

EV.prototype.chargeBattery = function(chargeTo) {
    this.charge = chargeTo;
}

EV.prototype.accelerate = function() {
    this.speed += 20;
    this.charge--;
    console.log(`${this.make} is going at ${this.speed} km/h, with a charge of ${this.charge}`);
};

const tesla = new EV("Tesla", 120, 23);
tesla.chargeBattery(90);
console.log(tesla);
tesla.brake();
tesla.accelerate();



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

class StudentCl extends PersonCl {
    constructor(fullName, birthYear, course) {
        // Always needs to happen first!
        super(fullName, birthYear);
        this.course = course;
    }

    introduce() {
        console.log(`My name is ${this.fullName} and i study ${this.course}`);
    }


    calcAge() {
        console.log(`I'm ${2037 - this.birthYear} years old, but as a student i feel more like ${2037 - this.birthYear + 10}`)
    }
}



const martha = new StudentCl("Martha Jones", 2012, "Computer science");
martha.introduce();
martha.calcAge();
  

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

const StudentProto = Object.create(PersonProto);
StudentProto.init = function(firstName, birthYear, course) {
    PersonProto.init.call(this, firstName, birthYear)
    this.course = course;
}

StudentProto.introduce = function() {
    console.log(`My name is ${this.fullName} and i study ${this.course}`);
}

const jay = Object.create(StudentProto);
jay.init("Jay", 2010, "Computer science");
jay.introduce();
jay.calcAge();


// 1) Public fields
// 2) Private fields
// 3) Public methods
// 4) Private methods
// (there is also the static version)

class Account {
    // 1) Public fields (instances)
    locale = navigator.language;

    // 2) Private fields (instances)
    #movements = [];
    #pin;
    

    constructor(owner, currency, pin) {
        this.owner = owner;
        this.currency = currency;
        // Protected property
        this.#pin = pin;
        // this._movements = [];
        // this.locale = navigator.language;

        console.log(`Thanks for opening a account, ${owner}`);
    }

    // 3) Public methods
    // Public interface 
    getMovements() {
        return this.#movements;
    }
    
    deposit(val) {
        this.#movements.push(val);
        return this;
    }

    withdraw(val) {
        this.deposit(-val);
        return this;
    }

    requestLoan(val) {
        if(this._approveLoan(val)) {
            this.deposit(val);
            console.log("Loan approved");
            return this;
        }
    }

    static helper() {
        console.log("Helper")
    }

    // 4) Private methods
    // #approveLoan() {
    _approveLoan() {
        return true;
    }
}

const acc1 = new Account("Jonas", "EUR", 1111);
console.log(acc1);

// acc1._movements.push(250);
// acc1._movements.push(-140);
acc1.deposit(250);
acc1.withdraw(140);
acc1.requestLoan(1000);
acc1._approveLoan(1000);
console.log(acc1.getMovements());
console.log(acc1);
Account.helper();

// console.log(acc1.#movements);
// console.log(acc1.#pin);
// console.log(acc1.#approveLoan(100));

// Chanining
acc1.deposit(300).deposit(500).withdraw(35).requestLoan(25000).withdraw(4000);
console.log(acc1.getMovements());
*/


//////////////////////////////////////////////////////////////
// Challenge 3

class CarCl { 
    constructor (make, speed) {
        this.make = make;
        this.speed = speed;
    }

    accelerate(){
        this.speed += 10;
        console.log(
            `${this.make} is going at ${this.speed} km/h`
            );
    }

    brake(){
        this.speed -= 5;
        console.log(
            `${this.make} is going at ${this.speed} km/h`
            );
        return this;
    }

    get speedUS() {
        return this.speed / 1.6; 
    }

    set speedUS(speed) {
        this.speed = speed * 1.6;
    }
};

class EVCl extends CarCl {
    #charge;

    constructor (make, speed, charge) {
        super(make, speed);
        this.#charge = charge;
    }

    chargeBattery(chargeTo) {
        this.#charge = chargeTo;
        return this;
    }

    accelerate() {
        this.speed += 20;
        this.#charge--;
        console.log(
            `${this.make} is going at ${this.speed} km/h, with a charge of ${this.  #charge}`
        );
        return this;
    }
}

const rivian = new EVCl("Rivian", 120, 23);
console.log(rivian);
// console.log(rivian.#charge);
rivian
.accelerate()
.accelerate()
.accelerate()
.brake()
.chargeBattery(50)
.accelerate();

console.log(rivian.speedUS);


