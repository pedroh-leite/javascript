'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

  const weekDays = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
  const openingHours = {
    [weekDays[3]]: {
      open: 12,
      close: 22,
    },
    
    [weekDays[4]]: {
      open: 11,
      close: 23,
    },
    
    [weekDays[5]]:{
      open: 0, //Open 24h
      close: 12 + 12,
    },
  };

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  
  //ES6 enhanced  obbject literals
  openingHours,

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]]
  },



  orderDelivery({starterIndex = 1, mainIndex = 0, time = "20:00", address}) {
    console.log(`Order received ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`);
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, ${ing3}`);
  },

  orderPizza(mainIngredient, ...otherIngredient) {
    console.log(mainIngredient);
    console.log(otherIngredient)
  }

};

//Property NAMES 
const properties = Object.keys(openingHours);
console.log(properties);

let openStr = `We are open ${properties.length} days: `;

for (const day of properties) {
  openStr += `${day}, `
}

console.log(openStr)

//Property VALUES

const values = Object.values(openingHours)
console.log(values);

//Entire object
const entries = Object.entries(openingHours);
//console.log(entries);

//[key, value]
for( const [day, {open, close}] of entries) {
  console.log(`On ${key} we open at ${open} and close at ${close}`);
}
/*
if(restaurant.openingHours && restaurant.openingHours.mon)
console.log(restaurant.openingHours.mon.open);

// console.log(restaurant.openingHours.mon.open);

//With optional chaining
console.log(restaurant.openingHours.mon?.open);
console.log(restaurant.openingHours?.mon?.open);

//Example
const days = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

for(const day of days) {
  console.log(day);
  const open = restaurant.openingHours[day]?.open ?? "closed";
  console.log(`On ${day}, we open at ${open}`)
};

//Methods

console.log(restaurant.order?.(0,1) ?? "Method does not exist");
console.log(restaurant.orderRisotto?.(0,1) ?? "Method does not exist");


//Arrays
 const users = [
   {names: "Pedro", email: "pedro@leite.com"}];
//const users = []

  console.log(users[0]?.names ?? "User array empty");

 if (users.length > 0) console.log(users[0].names); else console.log("User array empty");

const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

for(const item of menu) console.log(item);

for(const [i, el] of menu.entries()) {
  console.log(`${i + 1}: ${el}`);
};

// console.log(...menu.entries());


const rest1 = {
  name: "Capri",
  //numGuests: 20,
  numGuests: 0,
};

const rest2 = {
  name: "Piazza",
  owner: "Giovanni Rossi",
};

//OR assignment operator
// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10; 
//rest1.numGuests ||= 10;
//rest2.numGuests ||= 10;

//Nullish assignment operator (null or undefined)
rest1.numGuests ??= 10;
rest2.numGuests ??= 10;

//AND assignment operator
// rest2.owner = rest2.owner && "<Anonymous>";
// rest1.owner = rest1.owner && "<Anonymous>";
rest1.owner &&= "<ANONYMOUS>"
rest2.owner &&= "<ANONYMOUS>"


console.log(rest1);
console.log(rest2);

restaurant.numGuests = 0;
const guests =  restaurant.numGuests || 10;
console.log(guests) 

//Nullish: null and undefined (NOT 0 or " ")
const guestCorrect = restaurant.numGuests ?? 10;
console.log(guestCorrect)


console.log("---- OR ----")

//Use ANY data types, return ANY data types, short-circuiting
console.log(3 || "Pedro");
console.log("" || "Pedro");
console.log(true || 0);
console.log(undefined || null);

console.log(undefined || 0 || "" || "Hello" || 23 || null);

restaurant.numGuests = 0;
const guests1 =  restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1)

const guests2 = restaurant.numGuests || 10;
console.log(guests2);

console.log("---- AND ----");

console.log(0 && "Pedro");
console.log(7 && "Pedro");

console.log("Hello" && 23 && null && "Pedro");

//Practical example
if(restaurant.orderPizza) {
  restaurant.orderPizza("mushrooms", "spinach")
}

restaurant.orderPizza && restaurant.orderPizza("mushrooms", "spinach");




//1 - Destructuring

//SPREAD, because on RIGHT side of =
const arr = [1, 2, ...[3, 4]];

//REST, because on LEFT side of =
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);

const [pizza, , risotto, ...otherFood] = [...restaurant.mainMenu, ...restaurant.starterMenu]
console.log(pizza, risotto, otherFood)

//Objects 
const {sat, ...weekDays} = restaurant.openingHours;
console.log(weekDays)

//2 - Functions
const add = function(...numbers) {
  let sum = 0;
  for(let i = 0; i < numbers.length; i++) sum+= numbers[i];
  console.log(sum)
};
add(2, 3);
add(5, 3, 7, 2);
add(8, 2, 5, 3, 2, 1, 4);

const x = [23, 5, 7];
add(...x);

restaurant.orderPizza("mushrooms", "onion", "olives", "spinach");
restaurant.orderPizza("mushrooms");


const arr = [7, 8, 9];
const badNewArray = [1, 2, arr[0], arr[1],arr[2]];
console.log(badNewArray);

const newArray = [1, 2, ... arr];
console.log(newArray)

console.log(...newArray);
console.log(1, 2, 7, 8, 9);

const newMenu = [...restaurant.mainMenu, "Gnocci"];
console.log(newMenu);

//Copy array
const mainMenuCopy = [...restaurant.mainMenu];

//Join 2 arrays (or more)
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu]
console.log(menu)

//Iterables: arrays, strings, maps, sets. NOT objects
const str = "Pedro";
const letters = [...str, " ", "S."];
console.log(letters);
console.log(...str);
console.log("P", "e", "d", "r", "o");
//console.log(`${...str} Leite`)

//Real-world example
const ingredients = [prompt("Let's make pasta! Ingredient 1?"),
prompt("Inredient 2?"),
prompt ("Ingredient 3?"),
];

console.log(ingredients);

restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);
restaurant.orderPasta(...ingredients)

//Objects
const newRestaurant = {foundedYear: 1998, ...restaurant, founder: "Peter"}
console.log(newRestaurant)

const restaurantCopy = {...restaurant}
restaurantCopy.name = "Ristorante roma"
console.log(restaurantCopy.name)
console.log(restaurant.name)


//////////////////////////////////////////////////
//Destructuring objects
restaurant.orderDelivery({
  time: "22:30",
  address: "Via del sole, 511",
  mainIndex: 2,
  starterIndex: 2,
})

restaurant.orderDelivery({
  address: "Via del sole, 511",
  starterIndex: 1,
})

const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

const {name: restaurantName,
   openingHours: hours,
    categories: tags
  } = restaurant
console.log(restaurantName, hours, tags);

//Default values
const { menu = [], starterMenu: starters = []} = restaurant
console.log(menu, starters);

//Mutating variables 
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };
({a, b} = obj);
console.log(a, b)

//Nested objects
const {fri:{open: o, close: c}} = openingHours;
console.log(o, c)



//Destruturing Arrays
//////////////////////////////////////////////////
const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x, y, z ] = arr;
console.log(x, y, z);

let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

//Switching variables
// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary)

[main, secondary] = [secondary, main];
console.log(main, secondary);

//Receive 2 return values from a function
const [starter, mainCourse] = (restaurant.order(2,0));
console.log(starter, mainCourse);

const nested = [2, 4, [5, 6]];
// const [i, ,  j] = nested;
// console.log(i, j)
const [i, ,[j, k]] = nested;
console.log(i,j,k);

//Default values
const [p=1, q=1, r=1] = [8];
console.log(p, q, r);


//////////////////////////////////////////////////
//Coding chalenge
const game = {
  team1: "Bayern Munchen",
  team2: "Borussia dortmund",
  players: [[
    "Neuer",
    "Pavard",
    "Martinez",
    "Alaba",
    "Davies",
    "Kimmich",
    "Goretzka",
    "Coman",
    "Muller",
    "Gnabry",
    "Lewandowski",
  ],
  
  [
    "Burki",
    "Schulz",
    "Hummels",
    "Akanji",
    "Hakimi",
    "Weigl",
    "Witzel",
    "Hazard",
    "Brandt",
    "Sancho",
    "Gotze", 
  ],
],

  score: "4 x 0",
  scored: ["Lewandowski", "Gnabry", "Lewandowsni", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.25,
  },

}

//1.
const [player1, player2] = game.players;
console.log(player1, player2 );

//2.
const [gk, ...fieldPlayers] = player1;
console.log(gk, fieldPlayers);

//3.
const allPlayers = [...player1, ...player2];
console.log(allPlayers);

//4.
const players1Final = [...player1, "Thiago", "Coutinho", "Perisic"];

//5.
const {odds: {team1, x: draw, team2}} = game;
console.log(team1, draw, team2);

//6.
const printGoal = function (...players) {
  console.log(players); 
  console.log(`${players.length} goals were scored`)
}

//printGoal("Davies", "Muller", "Lewandowski", "Kimmich");
//printGoal("Davies", "Muller");
printGoal(...game.scored);

//7.
team1 < team2 && console.log("Team 1 is more likely to win");
team1 > team2 && console.log("Team 2 is more likely to win");*/
 
 