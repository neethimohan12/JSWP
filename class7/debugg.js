// This calculator has bugs!
function calculator(num1, num2, operation) {
 let result;
 if (operation === "add") {
 result = num1 + num2;
 } else if (operation === "subtract") {
 result = num1 - num2;
 }
 return result;
}
// Test the calculator
console.log(calculator(10, 5, "add")); // Should be 15
console.log(calculator(10, 5, "subtract")); // Should be 5
function calculator(num1, num2, operation) {
 console.log("Inputs:", num1, num2, operation);
 let result;
 if (operation === "add") { // Bug: using = instead of ===
 console.log("Doing addition");
 result = num1 + num2;
 } else if (operation === "subtract") {
 console.log("Doing subtraction");
 result = num1 - num2;
 }
 console.log("Result:", result);
 return result;
}


