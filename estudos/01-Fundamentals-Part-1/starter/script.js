     /* let js = "amazing";
      console.log(40+8+23-10);

      console.log("pedro");
      console.log(23);

      let firstName = "peter";
      console.log(firstName);
      console.log(firstName);
      console.log(firstName);

    //   Nomes das variáveis
      let peo_sa = "PS";
      let $function = 27;

      let person = "peo";
      let PI = 3.1415;

      let javascriptIsFun = true;
      console.log(javascriptIsFun);

        //console.log(typeof true);
      console.log(typeof javascriptIsFun);
        //   console.log(typeof 23);
        //   console.log(typeof "pedro");

      javascriptIsFun = 'YES';
      console.log(typeof javascriptIsFun);

      let year;
      console.log(year);
      console.log(typeof year);

      year = 1991;
      console.log(year);
      console.log(typeof year);

      let age = 30;
      age = 31;

      const birthYear = 2003;

      var job = "hr";
      job = "programmer";

      lastName = "Leite";
      console.log(lastName)

      // Operadores de matemática
      const now = 2037;
      const agePedro = now - 2003;
      const ageSa = now - 2018;
      console.log(agePedro, ageSa);

      console.log(agePedro * 2, agePedro / 10, 2**3);

      const firstName = "Pedro";
      const lastName = "Leite";
      const space = " ";     
      console.log(firstName + " " + lastName)

      //Operadores de atribuição 
      let x = 10 + 5; //x = 15
      x += 10 // x = x + 10 = 25
      x *= 4 // x = x * 4 = 100
      x++ // x = x + 1
      x-- // x = x-1
      x--
      console.log(x);

      // Operadores de comparação
      console.log(agePedro > ageSa);
      console.log(agePedro >= 18);

      const fullAge = agePedro >= 18;
      console.log(now - 2003 > now - 2018)

      const now = 2037;
      const agePedro = now - 2003;
      const ageSa = now - 2018;
     
      console.log(now - 2003 > now - 2018)

      let x, y;
      x = y = 25-10-5;
      console.log(x, y);
      
      const idadeMedia = (agePedro + ageSa) / 2      
      console.log(agePedro, ageSa, idadeMedia)

      const markWeight = 78
      const johnWeight = 92
      const markHeight = 1.69
      const johnHeight = 1.95
      

      const markBmi = markWeight / (markHeight * markHeight)
      console.log(markBmi)

      const johnBmi = johnWeight / (johnHeight * johnHeight)
      console.log(johnBmi)

      let markHigherBmi = (markBmi>johnBmi)
      console.log(markHigherBmi)

      const firstName = "Pedro";
      const job = "programmer";
      const birthYear = 2003;
      const year = 2037; 

      const pedro = "I'm " + firstName + ", a " + (year - birthYear) + " years old " + job + "!";
      console.log(pedro)

      const pedroNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}`;
      console.log(pedroNew)

      console.log(`Just a regular string`)

      console.log('String with \n\
        multiple \n\
        lines')

        console.log(`String with 
        multiple 
        lines`)

        const age = 19;

        if(age >= 18) {
          console.log('Sara can start driving license')
        } else{
          const yearsLeft = 18 - age
          console.log(`Sara is too young. Wait another ${yearsLeft} years`)
        }

        const birthYear = 2003;
        let century;
        if(birthYear <= 2000){
          century = 20;
        } else {
          century = 21
        }
        console.log(century)

        const markWeight = 78
        const johnWeight = 92
        const markHeight = 1.69
        const johnHeight = 1.95
      

        const markBmi = markWeight / (markHeight * markHeight)
        console.log(markBmi)

        const johnBmi = johnWeight / (johnHeight * johnHeight)
        console.log(johnBmi)

        console.log(markBmi, johnBmi)
        if(markBmi > johnBmi){
          console.log(`Mark's BMI (${markBmi}) is higher than John BMI (${johnBmi})`)
        } else {
          console.log(`John's BMI (${johnBmi}) is higher than Mark BMI (${markBmi})`)
        }
        //Type conversion
        const inputYear = "1991";
        console.log (Number(inputYear), inputYear);
        console.log (Number(inputYear) + 18);

        console.log(Number("Jonas"));
        console.log(typeof NaN);

        console.log(String(23), 23)

        //Type coercion
        console.log("I'm " + 23 + " years old");
        console.log("23" - "10" - 3);
        console.log("23" * "2");

        let n =  "1" + 1;
        n = n - 1;
        console.log(n)

        console.log(Boolean(0));
        console.log(Boolean(undefined));
        console.log(Boolean("Pedro"));
        console.log(Boolean({}));
        console.log(Boolean(""));

        const money = 0;
        if(money){
          console.log("Don't spend it all")
        } else {
          console.log("You should get a job!")
        }

        let height = 123;
        if (height){
          console.log("Height is defined!")
        } else{
          console.log("Height is Undefined")
        }

        const age = "18"
        if(age === 18) console.log("You just became a Adult (strict)");

        if(age == 18) console.log("You just became a Adult (loose)");

        const favourite = Number (prompt("What's your favroite number?"));
        console.log(favourite);
        console.log(typeof favourite);

        if(favourite === 23) {
          console.log("cool! 23 Is an amazing numeber")
        } else if(favourite === 7 ){
          console.log("7 is also a cool number")
        } else if(favourite === 9 ){
          console.log("9 is also a cool number")
        } 
        else {
          console.log("Number is not 23 or 9 or 7")
        }

        if(favourite !== 23){
          console.log("Why not 23?");*/

        const driversLicense = true // A
        const goodVision = true //B

        console.log(driversLicense && goodVision);
        console.log(driversLicense || goodVision);
        console.log(!driversLicense);

        // if(driversLicense && goodVision){
        //   console.log("Sarah is able to drive")
        // } else{
        //   console.log("Someone else should drive")
        // }

        const isTired = false //C
        console.log(driversLicense && goodVision && isTired);

        if(driversLicense && goodVision && !isTired){
          console.log("Sarah is able to drive")
        } else {
          console.log("Someone else should drive")
        }



        
        







