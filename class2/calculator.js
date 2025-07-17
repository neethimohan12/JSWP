let num1 = 30;
let num2 = 40;
let operator = "/";

// Input validation
if (isNaN(num1) || isNaN(num2)) {
console.log("Error: Please enter valid numbers.");
} else if ((operator === "/" || operator === "%") && num2 === 0) {
console.log("Error: Cannot divide or modulo by zero.");
} else {
let result;
}

//Calculation

  if (operator === "+") {
    result = num1 + num2;
  } else if (operator === "-") {
    result = num1 - num2;
  } else if (operator === "*") {
    result = num1 * num2;
  } else if (operator === "/") {
    result = num1 / num2;
  } else if (operator === "%") {
    result = num1 % num2;
  }

 // Display result
  console.log(`Result: ${num1} ${operator} ${num2} = ${result.toFixed(2)}`);