// Remember, we're gonna use strict mode in all scripts now!
"use strict";

/*const x = "23";
 if (x === 23) console.log(23);

 const calcAge = (birthYear) => 2037 - birthYear;

 console.log(calcAge(1991));*/

 const data1 = [17, 21, 23];
 const dat2 = [12, 5, -5 , 0, 4];

console.log(`... ${data1[0]}°C... ${data1[1]}°C ... ${data1[2]}°C ... `);

const printForeCast = function(arr) {
    let str = "";
    for(let i = 0; i < arr.length; i++){
        str = str + `${arr[i]}°C in ${i + 1} days ...`;
    }
    console.log(str)
}

printForeCast(data1);
