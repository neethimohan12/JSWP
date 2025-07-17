const sales = [
 { product: "Laptop", amount: 1200 },
 { product: "Mouse", amount: 25 },
 { product: "Keyboard", amount: 75 }
];

const expProducts = sales.filter(sale => sale.amount > 50);
console.log("Products over $50:");
console.log(expProducts);

const total = sales.reduce((sum, sale) => sum + sale.amount, 0);
const taxRate = 0.13;
const totalWithTax = total * (1 + taxRate);

console.log(`Total before tax: $${total}`);
console.log(`Total with 13% tax: $${totalWithTax.toFixed(2)}`);