const monthlyIncome = 3000

let expense = {
    rent: 2000,
    food: 400,
    transport: 200,
    entertainment: 150,
};

let totalExpense = expense.rent + expense.food + expense.transport + expense.entertainment ;
let savings = monthlyIncome - totalExpense;
let savingsRate = (savings /monthlyIncome) * 100;

console.log("=======This is my monthly Expense===========");
console.log("My Income was " + monthlyIncome);
console.log(`We spent a total of ${totalExpense}`);
console.log(`We spent a total of ${savings}`);
console.log(`We spent a total of ${savingsRate.toFixed(2)}`);

if (savingsRate >= 18) {
    console.log("You are saving well ! Good Job!!");
} else {
    console.log("You need to do better with your savings");
}

