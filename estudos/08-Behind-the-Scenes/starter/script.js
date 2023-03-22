'use strict';


/*function calcAge(birthYear) {
    const age = 2037 - birthYear;

    function printAge(){
        const output = ` ${firstName}, you are ${age} born in ${birthYear}`
        console.log(output);
      
        if(birthYear >= 1981 && birthYear <= 2005){
            var millenial = true;
            const firstName = "Jonas"; 
            const str = `Oh, and you're a millenial, ${firstName}`;
            console.log(str)

            function add(a, b){
                return a + b
            }
            }
        
            console.log(millenial)           
            add(2, 3)
        }
        

        printAge();
    
        return age;

    }

    


const firstName = "Pedro";
calcAge(2003);

//console.log(age);*/


//Variaveis
console.log(me);
//console.log(job);
//console.log(year)


var me = "Pedro";
let job = "Programmer";
const year = 2003;

//Functions
console.log(addDec(2, 3));
//console.log(addExpr(2, 3));
console.log(addArrow);
//console.log(addArrow(2, 3));


function addDec(a,b){
    return a + b;
}

const addExpr = function(a,b){
    return a + b;
}

var addArrow = (a,b) => a + b;

//Exemplo
console.log(undefined);
if(!numProducts) deleteShoppingCart();

var numProducts = 10;

function deleteShoppingCart(){
    console.log(`All products are deleted`)
}

var x = 1;
let y = 2;
const z = 3;