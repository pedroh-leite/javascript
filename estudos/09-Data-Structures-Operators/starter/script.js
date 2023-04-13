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


/*
//////////////////////////////////////
//Coding chalenge #4
document.body.append(document.createElement("textarea"));
document.body.append(document.createElement("button"));


document.querySelector("button").addEventListener("click", function() {
  const text = document.querySelector("textarea").value;
  const rows =  text.split("\n");
  console.log(rows);

  for(const [i, row] of rows.entries() ) {
    const [first, second] = row.toLowerCase().trim().split("_");  
    const output = `${first}${second.replace(second[0], second[0].toUpperCase())}`;
    console.log(`${output.padEnd(20)}${"✅".repeat(i + 1)}`);
  }
});

// underscore_case => underscoreCase
//  first_name
// Some_Variable 
//   calculate_AGE
// delayed_departure


////////////////////////////////////////////////
//WORKING With Strings Pt. 3
console.log("a+very+nice+string".split("+"));
console.log("Pedro Leite".split(" "));

const [firstName, lastName] = "Pedro Leite".split(" ")

const newName = ["Mr.", firstName, lastName.toUpperCase()].join(" ");
console.log(newName);

const capitalizeName = function(name) {
  const names = name.split(" ");
  const namesUpper = []

  for(const n of names){
    //namesUpper.push(n[0].toUpperCase() + n.slice(1))
    namesUpper.push(n.replace(n[0], n[0].toUpperCase()))
  }
  console.log(namesUpper.join(" "));
};

capitalizeName("jessica ann smith davies");
capitalizeName("pedro leite");


//Padding
const message = "Go to gate 23!";
console.log(message.padStart(20, "+").padEnd(30, "+"));
console.log("Pedro".padStart(25, "+").padEnd(30, "+"));

const maskCreditCard = function(number) {
  const str = number + "";
  const last = str.slice(-4);
  return last.padStart(str.length, "*");

}

console.log(maskCreditCard(45654513));
console.log(maskCreditCard(465453321645653));
console.log(maskCreditCard("6541258522563132131"));


//Repeat 
const message2 = "Bad weather... All departues delayed...";
console.log(message2.repeat(5))

const planesInLine = function(n) {
  console.log(`There are ${n} planes in line ${"🛬".repeat(n)}`);
}

planesInLine(5);
planesInLine(3);
planesInLine(12);


////////////////////////////////////////////////
//WORKING With Strings Pt. 2
const airline = "TAP Air Portugal";

console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

//FIX Capitalization in name
const passenger = "PeDRo"; // Pedro
const passengerLower = passenger.toLowerCase();
const passengerCorrect  = passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect)  

//Comparing email
const email = "hello@pedro.io";
const loginEmail = " Hello@Pedro.Io \n";

// const lowerEmail = loginEmail.toLowerCase();
// const trimmedEmail = lowerEmail.trim();


const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(normalizedEmail);
console.log( email === normalizedEmail);

//Replacing
const priceBR = "288,97R$";
const priceUS = priceBR.replace("R$", "U$").replace(",", ".");
console.log(priceUS);

const announcement = "All passenger come to boarding door 23. Boarding door 23!";
console.log(announcement.replace("door", "gate"));
// console.log(announcement.replaceAll("door", "gate"));

console.log(announcement.replace(/door/g, "gate"));

//Booleans
const plane = "Airbus A320neo";
console.log(plane.includes("A320"));
console.log(plane.includes("Boeing"));
console.log(plane.startsWith("Air"));

if(plane.startsWith("Airbus") && plane.endsWith("neo")) {
  console.log("Part of the new Airbus family");
};

//Practice exercise
const checkBaggage = function(items) {
  const baggage = items.toLowerCase();
  if (baggage.includes("knife") || baggage.includes("gun")){
    console.log("You are NOT allowed on board");
  } else {
    console.log("Welcome aboard!");
  }
};

checkBaggage("I have a laptop, some Food and a pocket Knife");
checkBaggage("Socks and camera");
checkBaggage("Got some snacks and a gun for protection");





////////////////////////////////////////////////
//WORKING With Strings Pt. 1
const airline = "TAP Air Portugal";
const plane = "A320";

console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);
console.log("B737"[0]);

console.log(airline.length);
console.log("B737".length);

console.log(airline.indexOf("r"));
console.log(airline.lastIndexOf("r"));
console.log(airline.indexOf("portugal"));


console.log(airline.slice(4));
console.log(airline.slice(4, 7));

console.log(airline.slice(0, airline.indexOf(" ")));
console.log(airline.slice(airline.lastIndexOf(" ") + 1));

console.log(airline.slice(-2));
console.log(airline.slice(1, -1));

const checkMiddleSeat = function(seat) {
  //B and E are middle seats
  const s = seat.slice(-1);
  if(s === "B" || s === "E")
  console.log("You got a middle seat 🤣")
  else console.log("You got lucky 😎")
}

checkMiddleSeat("11B");
checkMiddleSeat("32C");
checkMiddleSeat("3E")

console.log(new String("Pedro"));
console.log(typeof new String("Pedro"));

console.log(typeof new String("Pedro").slice(1));



////////////////////////////////////////////////////////
//CODING CHALENGE
const gameEvents = new Map ([
  [17, "⚽ GOAL"],
  [36, "🔀 SUBSTITUITION"],
  [47, "⚽ GOAL"],
  [61, "🔀 SUBSTITUITION"],
  [64, "🟨 YELLOW CARD"],
  [69, "🟥 RED CARD"],
  [70, "🔀 SUBSTITUITION"],
  [72, "🔀 SUBSTITUITION"],
  [76, "⚽ GOAL"],
  [80, "⚽ GOAL"],
  [92, "🟨 YELLOW CARD"],
]);

//1.
const events = new Set(gameEvents.values());
console.log(events); 

//2. 
gameEvents.delete(64);

//3.
const time = [...gameEvents.keys()].pop();
console.log(time)
console.log(`An event happened, on average, every ${time / gameEvents.size} minutes`);


//4.
for(const [min, event] of gameEvents) {
  const half = min <= 45 ? "FIRST" : "SECOND";
  console.log(`[${half} HALF] ${min}: ${event}`)
}




const question = new Map([
  ["Question", "What is the best programming language in the world?"],
  [1, "C"],
  [2, "Java"],
  [3, "JavaScript"],
  ["correct", 3],
  [true, "Correct :D"],
  [false, "Try again :("]
]);

console.log(question);

//Convert objects to MAPS
console.log(Object.entries(openingHours))
const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);


//Quiz app
console.log(question.get("Question"));
for(const [key, value] of question) {
  if(typeof key === "number") console.log(`Answer ${key}: ${value}`);
}
// const answer = Number (prompt("Your answer"));
const answer = 3;
console.log(answer);

console.log(question.get( question.get("correct") === answer));

//Convert map to ARRAY
console.log([...question]);
// console.log(question.entries());
console.log([...question.keys()]);
console.log([...question.values()]);



const rest = new Map();
rest.set("name", "Clasico Italiano");
rest.set(1, "Firenze, Italy" );
console.log(rest.set(2, "Lisboa, Portugal"));

rest
.set("categories", ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
.set("open", 11)
.set("closed", 23)
.set(true, "We are open :D")
.set(false, "We are closed :(")

console.log(rest.get("name"));
console.log(rest.get(true));
console.log(rest.get(1));

const time = 8;
console.log(rest.get(time > rest.get("open") && time < rest.get("close")));

console.log(rest.has("categories"));
rest.delete(2);
// rest.clear();
const arr = [1, 2];
rest.set(arr, "Test");
rest.set(document.querySelector("h1"), "Heading")
console.log(rest);
console.log(rest.size);

console.log(rest.get(arr));

const ordersSet = new Set(["Pasta",
 "Pizza",
  "Pizza",
  "Risotto",
  "Pasta",
  "Pizza",
]);
console.log(ordersSet);

console.log(new Set("Pedro"));

console.log(ordersSet.size);
console.log(ordersSet.has("Pizza"));
console.log(ordersSet.has("Bread"));
ordersSet.add("Garlic bread");
ordersSet.add("Garlic bread");
ordersSet.delete("Risotto");
//ordersSet.clear();
console.log(ordersSet);

for( const order of ordersSet) console.log(order);

//Example

const staff = [
  "Waiter",
  "Chef",
  "Waiter",
  "Manager",
  "Chef",
  "Waiter"
];
const staffUnique =[ ...new Set(staff)];
console.log(staffUnique);
console.log(
  new Set(["Waiter","Chef","Waiter","Manager","Chef","Waiter"]).size
  );

console.log(new Set("PedroLeite").size )




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
  odd: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },

};



// 1.
for(const [i, player] of game.scored.entries())
console.log(`Goal ${i + 1}: ${player}`);

//2.
const odds = Object.values(game.odd)
let average = 0;
for(const odd of odds) average += odd;
  average /= odds.length;
  console.log(average)

//3.
for (const [team, odd] of Object.entries(game.odd)) {
  const teamStr = team === "x" ? "draw" : `victory ${game[team]}`
  console.log(`Odd of ${teamStr} ${odd}`)
}

//Odd of victory Bayern Munchen: 1.33
//Odd of draw: 3.25
// Odd of victory Borussia Dortmund: 6.5




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
 
 