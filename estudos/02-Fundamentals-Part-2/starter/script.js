'use strict';

/*let hasDriversLicense = false;
const passTest = true;

if(passTest) hasDriversLicense = true;
if(hasDriversLicense) console.log("I can drive")

function logger(){
    console.log("My name is Peter")
}

//calling / running / invoking function
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
    console.log(apples, oranges)
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);
console.log(fruitProcessor(5, 0));

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice)

const orangeJuice = fruitProcessor(0, 5)
console.log(orangeJuice)

// Declaration Function
function calcAge1(birthYear) {
    return 2037 - birthYear;
}

const age1 = calcAge1(2003);
console.log(age1);


//Expression Function
const calcAge2 = function(birthYear) {
    return 2037 - birthYear;
}

const age2 = calcAge2(2003)
console.log(age1, age2)

//Arrow function
const calcAge3 = birthYear => 2037 - birthYear;
 const age3 = calcAge3(2003)
 console.log(age3)

 const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2037 - birthYear
    const retirement = 65 - age
    //return retirement
    return `${firstName} retires in ${retirement} years`
 }

 console.log(yearsUntilRetirement(2003, "Pedro"));
 console.log(yearsUntilRetirement(1993, "Sasa"));

function cutFruitsPieces(fruit){
    return fruit * 3;
}

 function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitsPieces(apples);
    const orangePieces = cutFruitsPieces(oranges);
    
    console.log(apples, oranges)
    const juice = `Juice with ${applePieces} pieces of apples and ${orangePieces} pieces of oranges.`;
    return juice
}

console.log(fruitProcessor(2, 3));

const calcAge = function(birthYear){
    return 2037 - birthYear;
}

const yearsUntilRetirement = function (birthYear, firstName) {
    const age = calcAge(birthYear)
    const retirement = 65 - age

    if(retirement>0) {
        console.log(`${firstName} retires in ${retirement} years`)
        return retirement
    } else {
        console.log(`${firstName}  has already retired`)
        return -1
    }

    return retirement
 }

 console.log(yearsUntilRetirement(2003, "Pedro"));
 console.log(yearsUntilRetirement(1950, "Sasa"));

const calcAverage = (a,b,c) => (a + b + c) / 3;
console.log(calcAverage(3, 4, 5));

//teste 1
let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49)
console.log (scoreDolphins, scoreKoalas)

const checkWinner = function(avgDolphins, avgKoalas){
    if(avgDolphins >= 2* avgKoalas){
        console.log(`Dolphins Win (${avgDolphins} vs ${avgKoalas})`)
    } else if(avgKoalas >= 2* avgDolphins){
        console.log(`Koalas Win (${avgKoalas} vs ${avgDolphins})`)
    } else {
        console.log(`No team wins`)
    }
}

checkWinner(scoreDolphins, scoreKoalas)

checkWinner(576, 111)

//teste 2
scoreDolphins = calcAverage(85, 54, 41);
scoreKoalas = calcAverage(23, 34, 27);
console.log (scoreDolphins, scoreKoalas);
checkWinner(scoreDolphins, scoreKoalas);

const friend1 = "Pepe";
const friend2 = "Peo";
const friend3 = "Pe";

const friends = ["Pepe", "Peo", "Pe"];
console.log(friends);

const ys = new Array(2003, 2004, 2005, 2006);

console.log(friends[0]);
console.log(friends[2])

console.log(friends.length)
console.log(friends [friends.length - 1]);

friends[2] = "Pedrão";
console.log(friends);

const firstName = "Peo";
const peo = [firstName, "Leite", 2037 - 2003, "Programmer", friends];
console.log(peo);
console.log(peo.length)


//exercise
const calcAge = function(birthYear) {
    return 2037 - birthYear;
}
const years = [2003, 2004, 2005, 2006, 2007];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length-1]);
console.log(age1, age2, age3);

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length-1])];
console.log(ages)

const friends = ["Pepe", "Peo", "Pe"];

// Add elements
const newLength = friends.push("Pedrão");
console.log(friends);
console.log(newLength)

friends.unshift("Peozinho");
console.log(friends)

//Remove elements
friends.pop();
const popped = friends.pop();
console.log(popped)
console.log(friends)

friends.shift();
console.log(friends)

console.log(friends.indexOf("Peo"))
console.log(friends.indexOf("Henrique"))

console.log(friends.includes("Peo"))
console.log(friends.includes("Henrique"))

const calcTip = function(bill){
return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}

//const calcTip = bill => bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

const bills = [125, 555, 44];
const tip = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])]
console.log(bills, tip);

const pedroArray = [
    "Pedro",
    "Leite",
    2037 - 2003,
    "Programmer",
    ["Pepe", "Peo", "Pe"]
];

const pedro = {
    firstName: "Pedro",
    lastName: "Leite",
    age: 2037 - 2003,
    job: "Programmer",
    friends: ["Pepe", "Peo", "Pe"]
}

const pedro = {
    firstName: "Pedro",
    lastName: "Leite",
    age: 2037 - 2003,
    job: "Programmer",
    friends: ["Pepe", "Peo", "Pe"]
};
console.log(pedro);

console.log(pedro.lastName);

console.log(pedro["lastName"]);

const nameKey = "Name";
console.log(pedro["first" + nameKey]);
console.log(pedro["last" + nameKey]);

//console.log(pedro."last" + nameKey)

const interestedIn = prompt("What do you want to know about Pedro? Choose between firstName, lastName, age, job, and friends");

if(pedro[interestedIn]){
    console.log(pedro [interestedIn]);
} else {
    console.log("Wrong request! Choose between firstName, lastName, age, job, and friends")
}

pedro.location = "São Paulo";
pedro["instagram"] = "@pedrxleite";

console.log(pedro)

//Challenge
console.log(`${pedro.firstName} has ${pedro.friends.length} friends and his best friend is called ${pedro.friends[0]}`);

const pedro = {
    firstName: "Pedro",
    lastName: "Leite",
    birthYear: 2003,
    job: "Programmer",
    friends: ["Pepe", "Peo", "Pe"],
    hasDriverLicense: false, 

    // calcAge: function(birthYear){
    //     return 2037 - birthYear;
    // }

    // calcAge: function(){
    //     //console.log(this);
    //      return 2037 - this.birthYear;
    //  }

    calcAge: function(){
        this.age = 2037 - this.birthYear;
         return this.age;
     },
    }

//      getSummary: function() {
//         return `${this.firstName} is a ${this.calcAge()}-years old ${pedro.job} and he has ${this.hasDriverLicense ? "a" : "no"} drivers license`
//      }
// };



console.log(pedro.calcAge());

console.log(pedro.age);


//console.log(pedro.getSummary())

 const mark = {
     completeName: "Mark Miller",
     mass: 78 ,
     height: 1.69,

     calcBMI: function(){
         this.bmi = this.mass / (this.height * this.height)
         return this.bmi;
     },
 }

 mark.calcBMI()

 const john = {
    completeName: "John Smith",
     mass: 92 ,
     height: 1.95,

     calcBMI: function(){
         this.bmi = this.mass / (this.height * this.height)
         return this.bmi;
     },
 }

 john.calcBMI()


 console.log(mark.bmi, john.bmi)


if(mark.bmi > john.bmi) {
    console.log(`${mark.completeName} BMI ${mark.bmi} is higher than ${john.completeName} ${john.bmi}`)
} else {
    console.log(`${john.completeName} BMI ${john.bmi} is higher than ${mark.completeName} ${mark.bmi}`)
}


// console.log("lifting weights repetition 1");
// console.log("lifting weights repetition 2");
// console.log("lifting weights repetition 3");
// console.log("lifting weights repetition 4");
// console.log("lifting weights repetition 5");
// console.log("lifting weights repetition 6");
// console.log("lifting weights repetition 7");
// console.log("lifting weights repetition 8");
// console.log("lifting weights repetition 9");
// console.log("lifting weights repetition 10");

for(let rep = 1; rep <= 10; rep++) {
console.log(`lifting weights repetition ${rep}`); 
}

const pedro = [
    "Pedro",
    "Leite",
    2037 - 2003,
    "Programmer",
    ["Pepe", "Peo", "Pe"],
    true
];

const types = [

];

for(let i = 0; i< pedro.length ;i++) {
    console.log(pedro[i], typeof pedro[i]);

    //types[i] = typeof pedro[i];
    types.push(typeof pedro[i])
}

console.log(types)

const years = [2003, 1993, 1971, 1965];
const ages = [];

for(let i = 0; i < years.length; i++) {
    ages.push(2023 - years[i])
}

console.log(ages);


console.log("---ONLY STRINGS---")
for(let i = 0; i< pedro.length ;i++) {
    if(typeof pedro[i] !== "string") continue;

    console.log(pedro[i], typeof pedro[i]);
}

console.log("---BREAK WITH NUMBER---")
for(let i = 0; i< pedro.length ;i++) {
    if(typeof pedro[i] === "number") break;

    console.log(pedro[i], typeof pedro[i]);
}

const pedro = [
    "Pedro",
    "Leite",
    2023 - 2003,
    "Programmer",
    ["Pepe", "Peo", "Pe"]
];

for(let i = pedro.length-1; i >= 0; i--) {
    console.log(i, pedro[i])
}

for(let exercise = 1; exercise < 4; exercise++) {
    console.log(`-----Starting exercise ${exercise}`);

    for(let rep = 1; rep < 6; rep++) {;
    console.log(`Lifting weight repetition ${rep}`)
    }
}

for(let rep = 1; rep <= 10; rep++) {
    console.log(`lifting weights repetition ${rep}`); 
}

let rep = 1; 
while(rep<=10) {
    console.log(`WHILE: lifting weights repetition ${rep}`); 

    rep++;
}*/

let dice = Math.trunc(Math.random() * 6) + 1

while(dice !== 6){
    console.log(`You rolled a ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1;
    if(dice === 6) console.log("Loop is about to end...");
}
















