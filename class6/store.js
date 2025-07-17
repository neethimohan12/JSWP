class Store {
 constructor(name) {
 this.name = name;
 this.products = [];
 this.revenue = 0;
 }
 addProduct(product) {
 this.products.push(product);
 }
 sellProduct(productName) {
 const product = this.products.find(p => p.name === productName);
 if (product && product.sell()) {
 this.revenue += product.price;
 return true;
 }
 return false;
 }
}

// Create your store
const myStore = new Store("Tech Shop");
myStore.addProduct(new Product("Laptop", 999, 5));
myStore.addProduct(new Product("Mouse", 25, 20));
// Make some sales
myStore.sellProduct("Laptop");
console.log(`Revenue: $${myStore.revenue}`);
console.log(myStore.products[0].quantity);