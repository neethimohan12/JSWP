// Copy this code and debug it!
let secretNumber = Math.floor(Math.random() * 10) + 1;
let attempts = 0;
function guessNumber() {
 let guess = parseInt(prompt("Guess a number between 1 and 10:"));
 attempts = attempts + 1;

 // Add console.log here to debug!
 console.log(`the value of secret number : ${secretNumber}`);
 console.log(`the value of guess: ${guess}`);
 console.log(`no.of attempts : ${attempts}`);
 if (guess < secretNumber) { // Bug!
 alert("Too low! Try again.");
 guessNumber();
 } else if (guess > secretNumber) {
 alert("Too high! Try again.");
 guessNumber();
 } else {
 alert("Correct! It took " + attempts + " tries!"); // Bug!
 }
}
// Start the game
guessNumber();
