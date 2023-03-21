'use strict';


function calcAge(birthYear) {
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

//console.log(age);