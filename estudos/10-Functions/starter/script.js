'use strict';

const bookings = [];

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