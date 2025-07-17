// Restaurant menu as an array of objects
let menu = [
  { id: 1, name: "Fried Corn", category: "Appetizer", price: 6, dietary: ["vegetarian"] },
  { id: 2, name: "Vegetable Salad", category: "Appetizer", price: 7, dietary: ["gluten-free"] },
  { id: 3, name: "Grilled Chicken", category: "Main", price: 14, dietary: [] },
  { id: 4, name: "Fried Rice", category: "Main", price: 12, dietary: ["vegan"] },
  { id: 5, name: "Steak", category: "Main", price: 20, dietary: [] },
  { id: 6, name: "strawberrycske", category: "Dessert", price: 8, dietary: [] },
  { id: 7, name: "Fruit Salad", category: "Dessert", price: 5, dietary: ["vegan", "gluten-free"] }
];

// Filter: Category = "Main"
let mainDishes = [];
for (let i = 0; i < menu.length; i++) {
  if (menu[i].category === "Main") {
    mainDishes.push(menu[i]);
  }
}
console.log("Main Dishes:");
console.log(mainDishes);

// Filter: Dietary = "vegan"
let veganItems = [];
for (let i = 0; i < menu.length; i++) {
  if (menu[i].dietary.includes("vegan")) {
    veganItems.push(menu[i]);
  }
}
console.log("Vegan Items:");
console.log(veganItems);

// Filter: Price range between $5 and $12
let midPriceItems = [];
for (let i = 0; i < menu.length; i++) {
  if (menu[i].price >= 5 && menu[i].price <= 12) {
    midPriceItems.push(menu[i]);
  }
}
console.log("Items between $5 and $12:");
console.log(midPriceItems);

// Order calculation: IDs = [2, 4, 6]
let orderIds = [2, 4, 6];
let orderedItems = [];
let subtotal = 0;

for (let i = 0; i < menu.length; i++) {
  if (orderIds.includes(menu[i].id)) {
    orderedItems.push(menu[i]);
    subtotal += menu[i].price;
  }
}

let taxRate = 0.1;
let tax = subtotal * taxRate;
let total = subtotal + tax;

console.log("Ordered Items:");
console.log(orderedItems);
console.log("Subtotal: $" + subtotal.toFixed(2));
console.log("Tax (10%): $" + tax.toFixed(2));
console.log("Total: $" + total.toFixed(2));