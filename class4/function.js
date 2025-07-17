// function simpleFunction(name){
//     console.log(`Hello ${name}`);
// }

// simpleFunction("Neethu");

// function calc(a, b){
//     return 1 + b;
// }

// let result = calc(1, 2);
// console.log(result);

// function fullname(firstName, lastName){
//     return `${firstName} ${lastName}`

// console.log (fullname("neethi","mohan"))
// }

// function getCurrentTime(){
//  return new Date().toLocaleTimeString();
// }


// function discounter(price, percentDiscount){
//     discount = price * (percentDiscount / 100);
//     return price - discount;
// }

// console.log(discounter(100,20));

// function ageChecker(age){
//     if (age < 0) {
//         return `Invalid age :${age}`;
//     }
//     else if (age < 18){
//         return `Minor`;
//     } else if (age < 65) {
//         return `Adult`;
//     }else {
//         return `Senior`;
//     }
// }

// console.log(ageChecker(-1));
// console.log(ageChecker(25));
// console.log(ageChecker(70));
// console.log(ageChecker(17));

function logger(message, application = "main-backend")
{
    console.log(`[${new Date().toLocaleString()}] ${application} ${message}`);
}

//logger("Processed user shopping cart","shopping");
logger("Processed user shopping cart");