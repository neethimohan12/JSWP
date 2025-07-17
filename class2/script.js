//mybox = "books";
//console.log("Now my box is : " +mybox)

//let emptyVar = null;

//console.log(typeof emptyVar);
//console.log(typeof "String");
//console.log(typeof 12);
//console.log(typeof -12);
//console.log(typeof 12.63);
//console.log(typeof true);
//console.log(typeof false);

//let a = 10;
//let b = 3;

//addition
//console.log(a + b);
//subtraction
//console.log(a - b);
//Multiplication
//console.log(a * b);
//Division
//console.log(a / b);
//Modulo
//console.log(a % b);
//exponent
//console.log(a ** b);


//increment
//let count = 0;
//count++;
//console.log("Incrementing count by 1 : " + count);
//count--;
//console.log("Subtracting count by 1 : " + count);
//count = 2;
//count *= 2;  //count = count *2 ;
//console.log("Multiply count by 2 : " + count);

//Divide count by 2
//count /= 2;  //count = count *2 ;
//console.log("Divide count by 2 : " + count);


//let firstName = "Neethi";
//let lastName = "Mohan";
//console.log ("printed this out using concatenation" + firstName + " " + lastName + "!"); 
//console.log(`Printed this out using Template literals : ${firstName} ${lastName}!`);
//console.log("The length of var : " + firstName.length);


//let message = " Javascript is Awesome !";
//console.log(message.toUpperCase());
//console.log(message.toLowerCase());
//console.log(message.trim());
//console.log(message.indexOf("is"));
//console.log(message.replace("Awesome" , "Cool").trim().toLowerCase().toUpperCase());

let stringNumber = "123";
//let actualNumber = Number(stringNumber);
let actualNumber = Number(false); //true == 1 and false == 0

//print typeof actualNumber
console.log(typeof actualNumber);
console.log(actualNumber);
//console.log(stringNumber);

let myNumber=43.23;
console.log(parseInt(myNumber));
console.log(parseFloat(myNumber));

console.log(String(myNumber));
console.log(myNumber.toString());
console.log(myNumber + "");

console.log(Boolean(1));
console.log(Boolean(0));
console.log(Boolean(""));
console.log(Boolean("none"));
console.log(Boolean(null));


console.log("5" + 2);
console.log("5" - 2);
console.log("5" * 2);
console.log("5" / 2);

console.log("10" == 9 );
console.log(true + true);
console.log("10" === 10);