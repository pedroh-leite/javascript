'use strict';

/*const bookings = [];

const createBooking = function(flightNumber,
     numberOfPassengers = 1,
      price = 199 * numberOfPassengers
      ) {
    //ES5
    // numberOfPassengers = numberOfPassengers || 1;
    // price = price || 199;

    const boooking = {
        flightNumber,
        numberOfPassengers,
        price
    };
    console.log(boooking);
    bookings.push(boooking);
};

createBooking("LH123");
createBooking("LH123",2, 800);
createBooking("LH123",2);
createBooking("LH123",5);

createBooking("LH123",undefined ,1000)


const flight = "LH234";
const pedro = {
    name: "Pedro Leite",
    passport:  48816028882
};

const checkIn = function(flightNum, passenger) {
    flightNum = "Lh999";
    passenger.name ="Mr. " + passenger.name;

    if(passenger.passport === 48816028882){
        alert("Check in")
    } else {
        alert("Wrong passport!")
    }
}

// checkIn(flight, pedro);
// console.log(flight);
// console.log(pedro);

//Is the same as doing...
// const flightNum = flight;
// const passenger = pedro;

const newPassport = function(person) {
    person.passport = Math.trunc(Math.random() * 10000000000)
}

newPassport(pedro);
checkIn(flight, pedro);


const oneWord = function(str) {
    return str.replace(/ /g, "").toLowerCase();
};

const upperFirstWord = function(str) {
    const [first, ...others]= str.split(" ");
    return[first.toUpperCase(), ...others].join(" "); 
};

//Higher-order function
const transformer = function(str, fn) {
    console.log(`Original string: ${str}`);
    console.log(`Transformed string: ${fn(str)}`);

    console.log(`Transformed by: ${fn.name}`)
};

transformer("Javascript is th best!", upperFirstWord);

transformer("Javascript is th best!", oneWord);

//JS uses callback all the time
const highFive = function() {
    console.log("🖐")
}
document.body.addEventListener("click", highFive);

["Pedro", "Marta", "Adam"].forEach(highFive);


const greet = function(greeting) {
    return function(name) {
        console.log(`${greeting} ${name}`)
    }
}

const greeterHey = greet("Hey");
greeterHey("Jonas");
greeterHey("Pedro");

greet("Hello")("Pedro");

//Challenge
const greetArr = greeting => name =>  console.log(`${greeting} ${name}`)

greetArr("Hi")("Pedro");


const lufthansa = {
    airline: "Lufthansa",
    iataCode: "LH",
    bookings: [],
    book(flightNum, name) {
        console.log(`${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`);

        this.bookings.push({flight: `${this.iataCode}${flightNum}, name`}) 
    },
};
""
lufthansa.book(239, "Pedro Leite");
lufthansa.book(635, "Peter Milk");
console.log(lufthansa)

const eurowings = {
    airline: "Eurowings",
    iataCode: "EW",
    bookings: [], 
}

const book = lufthansa.book;

// Does NOT work
// book(23, "Sabrina Leite");

//CALL method
book.call(eurowings, 23, "Sabrina Leite");
console.log(eurowings);

book.call(lufthansa, 239, "Edinalva Leite");
console.log(lufthansa);

const swiss = {
    airline: "Swiss Airlines",
    iataCode: "LX",
    bookings: [], 
}

book.call(swiss, 583, "Damião Alves");
console.log(swiss);

//APPLY method

const flightData = [583, "Puff Alves"];
book.apply(swiss, flightData);
console.log(swiss);

book.call(swiss, ...flightData)
console.log(swiss)

//Bind method
const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);

bookEW(23, "Steve Williams");

const bookEW23 = book.bind(eurowings, 23);
bookEW23("Pedro Leite");
bookEW23("Martha Cooper");

//With Event Listeners  
lufthansa.planes = 300;
lufthansa.buyPlane = function() {
    console.log(this);

    this.planes++;
    console.log(this.planes);
};

// lufthansa.buyPlane();

document.querySelector(".buy")
.addEventListener("click", lufthansa.buyPlane.bind(lufthansa));

//Partial application
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVat = addTax.bind(null, 0.23);
// addVat = value => value + value *  0.23;

console.log(addVat(100));
console.log(addVat(23));

const addTaxRate = function(rate) {
    return function(value) {
        return value + value * rate; 
    }
}

const addVat2 = addTaxRate(0.23);
console.log(addVat2(100));
console.log(addVat2(23))


///////////////////////////////////
//Code Challenge

const poll = { 
question: "What is your favourite programming language?",
options: ["0: Java", "1: Python", "2: Rust", "3: C++"],

answers: new Array(4).fill(0),
registerNewAnswer() {
    const answer = Number (
        prompt(
            `${this.question}\n${this.options.join("\n")}\n(Write option number`
            )
        ); 

        console.log(answer)

        //Register answer
        typeof answer === "number" && answer < this.answers.length && this.answers[answer]++;

            this.displayResults();
            this.displayResults("string");
    },
    displayResults(type = "array") {
        if(type === "array") {
            console.log(this.answers);
        } else if (type === "string") {
            console.log(`Poll results are ${this.answers.join(", ")}`)
        }
    }
};

//poll.registerNewAnswer();

document.querySelector(".poll")
.addEventListener("click", poll.registerNewAnswer.bind(poll));

poll.displayResults.call({answers: [5, 2, 3]}, "string");
poll.displayResults.call({answers: [1, 5, 3, 9, 6, 1]}, "string");
poll.displayResults.call({answers: [1, 5, 3, 9, 6, 1]});


const runOnce = function() {
    console.log("This will never run again");
}
runOnce();

//IIFE
(function() {
    console.log("This will never run again");
    const isPrivate = 23;
})();

//console.log(isPrivate)

(() => console.log("This will ALSO never run again"))();

{
    const isPrivate = 23;
    var notPrivate = 23
}
//console.log(isPrivate);
console.log(notPrivate)

const secureBooking = function() {
    let passengerCount = 0;

    return function() {
        passengerCount++;
        console.log(`${passengerCount} passengers`)
    }
}

const booker = secureBooking();

booker();
booker();
booker();

console.dir(booker);


//Example 1
let f;

const g = function() {
    const a = 23;
    f = function(){
        console.log(a * 2);
    };
};

const h = function(){
    const b = 777;
    f = function(){
        console.log(b * 2);
    };
}

g();
f();
console.dir(f);

//Re-assigning f function
h();
f();
console.dir(f);

//Example 2
const boardPassengers = function(n, wait) {
    const perGroup = n / 3;
    
    setTimeout(function(){
        console.log(`We are now boarding all ${n} passengers`);
        console.log(`There are 3 groups, each with ${perGroup} passengers`)
    }, wait * 1000);

    console.log(`Will start boarding in ${wait} seconds`)
};

//const perGroup = 1000;
boardPassengers(180, 3)*/

(function(){
    const header = document.querySelector("h1");
    header.style.color = "red";

    document.querySelector("body").addEventListener("click", function(){
        header.style.color = "blue";

    });
})();