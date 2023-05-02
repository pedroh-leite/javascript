'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    "2019-11-18T21:31:17.178Z",
    "2019-12-23T07:42:02.383Z",
    "2020-01-28T09:15:04.904Z",
    "2020-04-01T10:17:24.185Z",
    "2020-05-08T14:11:59.604Z",
    "2020-05-26T17:01:17.194Z",
    "2020-07-28T23:36:17.929Z",
    "2020-07-01T10:51:36.790Z"
  ],

  currency: "EUR",
  locale: "pt-PT",

};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');



  const formatMovementDate = function(date) {

    const calcDaysPassed = (date1, date2) =>
    Math.round(Math.abs(date2 - date1) / (1000 * 60 * 60 * 24));

    const daysPassed = calcDaysPassed(new Date(), date);
    console.log(daysPassed);

    if (daysPassed === 0) return "Today";
    if(daysPassed === 1 ) return "Yesterday";
    if(daysPassed <= 7 ) return `${daysPassed} days ago`;

      // const day = `${date.getDate()}`.padStart(2, 0);
      // const month = `${date.getMonth() + 1}`.padStart(2, 0);
      // const year = date.getFullYear();
      // return `${day}/${month}/${year}`;
      return new Intl.DateTimeFormat(locale).format(date)
    
  };

const displayMovements = function (acc, sort = false) {
  
  containerMovements.innerHTML = ' ';
  //.textContent = 0;

  const movs = sort ? acc.movements.slice().sort((a, b) => a - b) : acc.movements;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

   const date = new Date(acc.movementsDates[i]);
   const displayDate = formatMovementDate(date, acc.locale);

    const html = `
    <div class="movements__row">
          <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
        <div class="movements__date">${displayDate}</div>
          <div class="movements__value">${mov.toFixed(2)}€</div>
        </div>
    `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, cur) => acc + cur, 0);
  labelBalance.textContent = `${acc.balance.toFixed(2)}€`;
};

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes}€`;

  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(out).toFixed(2)}€`;

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${interest}€`;
};

const createUsername = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};

createUsername(accounts);

const updateUI = function (acc) {
  //Display movements
  displayMovements(acc);
  //Display balance
  calcDisplayBalance(acc);
  //Display summary
  calcDisplaySummary(acc);
};
//Event handler
let currentAccount;

//Fake always logged in
currentAccount = account1;
updateUI(currentAccount);
containerApp.style.opacity = 100;


//Experimenting API




//Day/month/year

btnLogin.addEventListener('click', function (e) {
  //Prevent form from submitting
  e.preventDefault();

  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );

  console.log(currentAccount);

  if (currentAccount?.pin === +(inputLoginPin.value)) {
    //Display UI and a Message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;

    //Create current date and time 
    const options = {
      hour: "numeric",
      minute: "numeric",
      day: "numeric",
      month: "long",
      year: "2-digit",
      weekday: "long",
    }

  // const locale = navigator.language;
  // console.log(locale)
    labelDate.textContent = new Intl.DateTimeFormat(currentAccount.locale, options).format(now);


    //Clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    updateUI(currentAccount);
  }
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = +(inputTransferAmount.value);
  const receiverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  inputTransferAmount.value = inputTransferTo.value = " ";

  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    //Doing the transfer
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);

    //Add Transfer date
    currentAccount.movementsDates.push(new Date().toISOString());
    receiverAcc.movementsDates.push(new Date().toISOString());


    //Update UI
    updateUI(currentAccount);
  }
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Math.floor(inputLoanAmount.value);

  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    //Add movement
    currentAccount.movements.push(amount);

    //Add loan date
    currentAccount.movementsDates.push(new Date().toISOString());

    // Update UI
    updateUI(currentAccount);
  }
  inputLoanAmount.value = '';
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  if (
    inputCloseUsername.value === currentAccount.username &&
    +(inputClosePin.value) === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );
    console.log(index);
    //.indexOf(23)

    //Delete account
    accounts.splice(index, 1);

    //HIDE UI
    containerApp.style.opacity = 0;
  }

  inputCloseUsername.value = inputClosePin.value = ' ';
});

let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
});
/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

/*
//SLICE Method
let arr  = ["a", "b", "c", "d", "e"];

console.log(arr.slice(2));
console.log(arr.slice(2, 4));
console.log(arr.slice(-1));
console.log(arr.slice(1, -2));
console.log(arr.slice());
console.log([...arr]);

//SPLICE Method
//console.log(arr.splice(2));
arr.splice(-1);
console.log(arr)
arr.splice(1, 2);
console.log(arr);

//REVERSE
arr  = ["a", "b", "c", "d", "e"];

const arr2 = ["j", "i", "h", "g", "f"];
console.log(arr2.reverse());
console.log(arr2);

//CONCAT
const letters = arr.concat(arr2);
console.log(letters);
console.log([...arr, ...arr2]);

//JOIN
console.log(letters.join(" - "));


const arr = [23, 11, 64];
console.log(arr[0]);
console.log(arr.at(0));

//Getting last array element
console.log(arr[arr.length - 1]);
console.log(arr.slice(-1)[0]);
console.log(arr.at(-1));

console.log("pedro".at(-1))

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

//for (const movement of movements) {

for(const [i, movement] of movements.entries()) {
  if(movement > 0) {
    console.log(`Movement ${i + 1}: You deposited ${movement}`);
  } else {
    console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}`);
  }
}

console.log("---- FOREACH METHOD ----")
movements.forEach(function (mov, i, arr) {
   if(mov > 0) {
    console.log(`Movement ${i + 1}: You deposited ${mov}`);
  } else {
    console.log(`Movement ${i + 1}: You withdrew ${Math.abs(mov)}`);
  }
});
//0: function(200);
//1: function(450);
//2: function(400);
//...


//Map
const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

currencies.forEach(function(value, key, map){
  console.log(`${key}: ${value}`);
});

//Set
const currenciesUnique = new Set (["USD", "GBP", "USD", "EUR", "EUR"]);

console.log(currenciesUnique);
currenciesUnique.forEach(function(value, key, map){
  console.log(`${key}: ${value}`)
})


const checkDogs = function (dogsJulia, dogsKate) {
  const dogsJuliaCorrected = dogsJulia.slice();
  dogsJuliaCorrected.splice(0, 1);
  dogsJuliaCorrected.splice(-2);

  const dogs = dogsJuliaCorrected.concat(dogsKate);
  console.log(dogs);

  dogs.forEach(function (dog, i) {
    if (dog >= 3) {
      console.log(`Dog number ${i + 1} is an adult, and is ${dog} years old`);
    } else {
      console.log(`Dog number ${i + 1} is still a puppy🐶`);
    }
  });
};

checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);




const euroToDollar = 1.1;

// const movementsUSD = movements.map(function(mov){
//   return mov * euroToDollar;  
// });

const movementsUSD = movements.map(mov => 
  mov * euroToDollar);

console.log(movements);
console.log(movementsUSD);

const movementsUSDFor = [];
for(const mov of movements) movementsUSDFor.push(mov * euroToDollar);
console.log(movementsUSDFor);   

const movementsDescript = movements.map((mov, i) => 
  `Movement ${i + 1}: You ${mov > 0 ? "deposited" : "withdrew"} ${Math.abs(mov)}`
)

console.log(movementsDescript)


const deposits = movements.filter(function(mov, i, arr) {
  return mov > 0;
});
console.log(movements);
console.log(deposits);

const depositsFor = [];
for (const mov of movements) if (mov > 0) depositsFor.push(mov);
console.log(depositsFor);

const withdrawals = movements.filter(mov => mov < 0);
console.log(withdrawals)


console.log(movements);

//acumulator >> SNOWBALL
// const balance = movements.reduce(function(acc, cur, i, arr) {
//   console.log(`Iteration ${i}: ${acc}`);
//   return acc + cur 
// }, 0);

const balance = movements.reduce ((acc, cur) =>  acc + cur, 0); 

console.log(balance);

let balance2 = 0;
for (const mov of movements) balance2 += mov;
console.log(balance2); 

//Maximum value
const max = movements.reduce((acc, mov) => {
  if(acc > mov)
    return acc;
  else
    return mov;
}, movements[0]);
console.log(max)


const calcAverageHumanAge = function(ages) {
  const humanAges = ages.map(age => age <= 2 ? 2 * age : 16 + age * 4);
  const adults = humanAges.filter(age => age >= 18);
  console.log(humanAges);
  console.log(adults);

//const average = adults.reduce((acc, age) => acc + age, 0) / adults.length;

  const average = adults.reduce((acc, age, i, arr) => acc + age / arr.length, 0);


  //2 3. (2+3)/2 = 2.5 === 2/2+3/2 = 2.5

  return average;

};

const avg1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);

const avg2 = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);

console.log(avg1, avg2);


const euroToDollar = 1.1;
console.log(movements)

//PIPELINE
const totalDepositsUSD = movements
.filter(mov => mov > 0)
.map((mov, i, arr) => {
  //console.log(arr);
  return mov * euroToDollar
})
//.map((mov) => mov * euroToDollar)
.reduce((acc, mov) => acc + mov, 0);

console.log(totalDepositsUSD);


const calcAverageHumanAge = function(ages) {
  const humanAges = ages.map(age => age <= 2 ? 2 * age : 16 + age * 4);
  const adults = humanAges.filter(age => age >= 18);

  const average = adults
  .reduce((acc, age, i, arr) => acc + age / arr.length, 0);

  return average;

};

const calcAverageHumanAge = ages => ages
.map(age => (age <= 2 ? 2 * age : 16 + age * 4 ))
.filter(age => age >= 18)
.reduce((acc, age, i, arr) => acc + age / arr.length, 0);
 

const avg1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);

const avg2 = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);

console.log(avg1, avg2);


const firstWithdrawal = movements.find(mov => mov < 0);
console.log(movements);
console.log(firstWithdrawal);

console.log(accounts);

const account = accounts.find(acc => acc.owner === "Jessica Davis");
console.log(account)


console.log(movements);

//Equality
console.log(movements.includes(-130));

//SOME: Condition
console.log(movements.some(mov => mov === -130))

const anyDep = movements.some(mov => mov > 1500);
console.log(anyDep);

//EVERY
console.log(movements.every(mov => mov > 0));
console.log(account4.movements.every(mov => mov > 0));

//Separate callback
const deposit = mov => mov > 0;
console.log(movements.some(deposit));
console.log(movements.every(deposit));
console.log(movements.filter(deposit));


const arr = [[1, 2, 3], [4, 5, 6], 7, 8];
console.log(arr.flat());

const arrDeep = [[[1, 2], 3], [4, [5, 6]], 7, 8];
console.log(arrDeep.flat(2));

//FLAT
const overalBalance = accounts
.map(acc => acc.movements)
.flat()
.reduce((acc, mov) => acc + mov, 0);
console.log(overalBalance);

//FLATMAP
const overalBalances = accounts
.flatMap(acc => acc.movements)
.reduce((acc, mov) => acc + mov, 0);
console.log(overalBalances);


//Strings
const owners = ['Jonas', 'Zach', 'Adam', 'Marta'];
console.log(owners.sort());
console.log(owners);

//Numbers
console.log(movements);

//Return < 0, A, B (keep order)
//Return > 0, B, A (switch order)

//Ascending
// movements.sort((a,b) => {
//   if(a > b) return 1;
//   if(a < b) return -1;
// });

movements.sort((a, b) => a - b);
console.log(movements);

//Descending
// movements.sort((a,b) => {
//   if(a > b)
//     return -1;
//   if(a < b)
//     return 1;
// });

movements.sort((a, b) => b - a);

console.log(movements);


const arr = [1, 2, 3, 4, 5, 6, 7];
console.log(new Array(1, 2, 3, 4, 5, 6, 7));

const x = new Array(7);
console.log(x);
//console.log(x.map(() => 5));
//x.fill(1);
x.fill(1, 3, 5);
console.log(x);

arr.fill(23, 2, 6);
console.log(arr);

//Array.from
const y = Array.from({length: 7}, () => 1); 
console.log(y);

const z = Array.from({length: 7}, (_, i) => i+1);
console.log(z);


labelBalance.addEventListener("click", function(){
  const MovsUI = Array.from(
    document.querySelectorAll(".movements__value"), el => Number (el.textContent.replace("€", "")) 
    );

    console.log(MovsUI.map);

    movementsUI2 = [...document.querySelectorAll(".movements__value")];
})


//Array methods practice

//1.
const bankDepositSum = accounts
.flatMap(acc => acc.movements)
.filter(mov => mov > 0)
.reduce((sum, cur) => sum + cur, 0);

console.log(bankDepositSum);

//2.
// const numDeposits1000 = accounts
// .flatMap(acc => acc.movements)
// .filter(mov => mov >= 1000).length;

const numDeposits1000 = accounts
.flatMap(acc => acc.movements)
//.reduce((count, cur)=> (cur >= 1000 ? count + 1 : count), 0);
.reduce((count, cur)=> (cur >= 1000 ? ++count : count), 0);


console.log(numDeposits1000)

//Prefixed ++ operator
let a = 10;
console.log(++a);
console.log(a);

//3.
const {deposits, withdrawals} = accounts
.flatMap(acc => acc.movements)
.reduce((sums, cur) =>  {
  //cur > 0 ? sums.deposits +=cur : sums.withdrawals += cur;
  sums[cur > 0 ? "deposits" : "withdrawals"] += cur;
  return sums;
}, 
{deposits: 0, withdrawals: 0}
);
console.log(deposits, withdrawals);

//4.
// this is a nice title -> This Is a Nice Title
const convertTitleCase = function(title) {
  const capitalize = str => str[0].toUpperCase() + str.slice(1);

  const exceptions = ["a", "an",, "and", "the", "but", "or", "on", "in", "with"];

  const titleCase = title
  .toLowerCase()
  .split(" ")
  .map(word => (exceptions.includes(word) ? word : capitalize(word)))
  .join(" ");
  return capitalize(titleCase);
};

console.log(convertTitleCase("this is a nice title"));
console.log(convertTitleCase("this is a LONG title but not too long"));
console.log(convertTitleCase("and here is another title  with an EXAMPLE"));


const dogs = [
  {weight: 22, curFood: 250, owners: ["Alice", "Bob"]}, 
  {weight: 8, curFood: 200, owners: ["Matilda"]},
  {weight: 13, curFood: 275, owners: ["Sarah", "John"]},
  {weight: 32, curFood: 340, owners: ["Michael"]},
];

//1.
dogs.forEach(dog => (dog.recFood = dog.weight ** 0.75 * 28));
console.log(dogs);

//2.
const dogSarah = dogs.find(dog => dog.owners.includes("Sarah"));
console.log(dogSarah);
console.log(`Sarah's dog is eating too ${dogSarah.curFood > dogSarah.recFood ? "much" : "little"} `);

//3.
const ownersEatTooMuch = dogs
.filter(dog => dog.curFood > dog.recFood)
.flatMap(dog => dog.owners);
console.log(ownersEatTooMuch);

const ownersEatTooLittle = dogs
.filter(dog => dog.curFood < dog.recFood)
.flatMap(dog => dog.owners);
console.log(ownersEatTooLittle);

//4.
//"Matilda and Alice and Bob's dogs eat too much!"  
//"Sarah and John and Michael's dogs eat too little!"
console.log(`${ownersEatTooMuch.join(" and ")}'s dogs eat too much!`);
console.log(`${ownersEatTooLittle.join(" and ")}'s dogs eat too little!`);

//5.
console.log(dogs.some(dog => dog.curFood === dog.recFood));

//6. 
const checkEating = dog => dog.curFood > dog.recFood * 0.9 && dog.curFood < dog.recFood * 1.1


console.log(dogs.some(checkEating));

//7. 
console.log(dogs.filter(checkEating));

//8.
const dogsSorted = dogs.slice().sort((a,b) => a.recFood-b.recFood)
console.log(dogsSorted);

console.log(23 === 23.0);

//Base 10 - 0 to 9
//Binary base - 0 1
console.log(0.1 + 0.2);
console.log( 0.1 + 0.2 === 0.3 );

console.log(Number(23));
console.log(+"23");

//Parsing  
console.log(Number.parseInt("30px", 10));
console.log(Number.parseInt("e23", 10));

console.log(Number.parseInt("2.5rem"));
console.log(Number.parseFloat("2.5rem"));

//console.log(parseFloat("2.5rem"));

//Check if value is a NaN
console.log(Number.isNaN(20));
console.log(Number.isNaN(+"20X"));
console.log(Number.isNaN(23 / 0));

//Checking if value is a number
console.log(Number.isFinite(20));
console.log(Number.isFinite("20")); 
console.log(Number.isFinite(+"20X")); 
console.log(Number.isFinite(23 / 0)); 

console.log(Number.isInteger(23));
console.log(Number.isInteger(23.0));
console.log(Number.isInteger(23 / 0));



console.log(Math.sqrt(25));
console.log(25 ** (1/2));
console.log(8 ** (1/3));

console.log(Math.max(5, 18, 23, 11, 2));
console.log(Math.max(5, 18, "23", 11, 2));
console.log(Math.max(5, 18, "23px", 11, 2));

console.log(Math.min(5, 18, 23, 11, 2));

console.log(Math.PI * Number.parseFloat("10px") ** 2);

console.log(Math.trunc(Math.random() * 6 ) + 1);

const randomInt = (min, max) => Math.floor(Math.random() * (max - min) + 1) + min;
//0...1 -> 0...(max-min) -> min...max
//console.log(randomInt(10, 20));

//Rounding integers
console.log(Math.trunc(23.3));


console.log(Math.round(23.3));
console.log(Math.round(23.9));

console.log(Math.floor(23.3));
console.log(Math.floor (23.9));

console.log(Math.round(23.3));
console.log(Math.round(23.9));

console.log(Math.trunc(-23.3));
console.log(Math.floor(-23.3));

//Rounding decimals
console.log((2.7).toFixed(0));
console.log((2.7).toFixed(3));
console.log((2.345).toFixed(2));
console.log(+(2.345).toFixed(2))


console.log(5 % 2);
console.log(5/2);

console.log(8%3);
console.log(8/3);

console.log(7 % 2);
console.log(7 / 2);

const isEven = n => n % 2 === 0;
console.log(isEven(8));
console.log(isEven(23));
console.log(isEven(534));

labelBalance.addEventListener("click", function(){
[...document.querySelectorAll(".movement__row")].forEach(function(row, i) {
  if(i % 2 === 0) row.style.backgroundColor = "orange";
  if(i % 3 === 0) row.style.backgroundColor = "blue";
});
});


//287,460,000,000 
const diameter = 287_460_000_000;
console.log(diameter);

const price = 345_99;
console.log(price);

const transferFee1 = 15_00;
const transferFee2 = 1_500;

const PI = 3.14_15;
console.log(PI);

console.log(Number("230_000"));
console.log(parseInt("230_000"));


console.log(2 ** 53 - 1);
console.log(Number.MAX_SAFE_INTEGER);
console.log(2 ** 53 + 1);
console.log(2 ** 53 + 2);
console.log(2 ** 53 + 3);
console.log(2 ** 53 + 4);

console.log(541248742655125485123659845n);
console.log(BigInt(54124874));
 
//Operations 
console.log(10000n + 10000n);
console.log(52563214562148632182189628n * 10000n);
//console.log(Math.sqrt(16n));

const huge = 20284525632156321n;
const num = 23;

console.log(huge * BigInt(num));

//Exceptions
console.log(20n > 15);
console.log(20n === 20)
console.log(typeof 20n);
console.log(20n == 20);

console.log(huge + " is Really big");

//Division
console.log(10n / 3n);
console.log(10 / 3);


//Create a date
const now = new Date();
console.log(now);

console.log(new Date("Apr 30 2023 13:45:39"));
console.log(new Date("December 24, 2015"));
console.log(new Date(account1.movementsDate[0]));

console.log(new Date(2037, 10, 19, 15, 23, 5));
console.log(new Date(2037, 10, 33));

console.log(new Date(0));
console.log(new Date(3 * 24 * 60 * 60 * 1000));


//Working with dates
const future = new Date(2037, 10, 19, 15, 23);
console.log(future);
console.log(future.getFullYear());
console.log(future.getMonth());
console.log(future.getDate());
console.log(future.getDay());
console.log(future.getHours());
console.log(future.getMinutes());
console.log(future.getSeconds());
console.log(future.toISOString());
console.log(future.getTime());

console.log(new Date(2142267780000));

console.log(Date.now());

future.setFullYear(2040);
console.log(future);


const future = new Date(2037, 10, 19, 15, 23);
console.log(+future);

const calcDaysPassed = (date1, date2) =>
 Math.abs(date2 - date1) / (1000 * 60 * 60 * 24);

const days1 = calcDaysPassed(
  new Date(2037, 3, 4), 
  new Date(2037, 3, 14)
  );

console.log(days1)


const num = 3884764.23;

const options = {
  style: "currency",
  unit: "celsius",
  currency: "EUR",
  //useGrouping: false, 
}

console.log("US: ", new Intl.NumberFormat("en-US", options).format(num));
console.log("Germany: ", new Intl.NumberFormat("de-DE", options).format(num));
console.log("Syria: ", new Intl.NumberFormat("ar-SY", options).format(num));
console.log(navigator.language, new Intl.NumberFormat(navigator.language, options).format(num));
*/