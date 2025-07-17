// This calculator has 3 bugs. Find and fix them!
function calculator() {
let num1 = paraseInt(prompt("Enter first number:"));
let num2 = parseInt(prompt("Enter second number:"));
let operation = prompt("Enter operation (+, -, *, /):");
let result;
if (operation === "+") {
result = num1 + num2;
} else if (operation === "-") {
result = num1 - num2;
} else if (operation === "*") {
result = num1 * num2;
} else if (operation === "/") {
result = num1 / num2;
}
console.log("Result: " + result);
}
calculator();