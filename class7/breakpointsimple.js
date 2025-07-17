function calculatePrice(quantity, price) {
 let subtotal = quantity * price; // Click line 2 to set breakpoint
 let tax = subtotal * 0.08;
 let total = subtotal + tax;
 return total;
}
calculatePrice(5, 10);
console.log(`The total is ${total}`);