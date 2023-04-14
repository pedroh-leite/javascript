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
*/

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