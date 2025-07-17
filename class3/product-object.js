let product = {
    brand: "Samsung",
    model: "524",

    spec: {
        camera: "24MP",
        battery:"344omah",
    },
    price: {
        number: 2000,
        currency: "USD",

    },

    applyDiscount: function (percentage){
        this.price.number = this.price.number * (1 - percentage/100);
        return this.price;
    },

    describe: function () {
        return `${this.brand} - ${this.model} - ${this.price.number}` 
    },

};

// console.log(product.applyDiscount(10));
// console.log(product.describe());
// console.log(product.price);

// let { brand: phoneBrand, model: phoneModel } = product;

// console.log(`The brand is ${phoneBrand} and the model is ${phoneModel}`);

//console.log(Object.keys(product.price));

console.log(Object.values(product.price));

console.log(Object.entries(product));

console.log("number" in product); //returns boolean

console.log(product.hasOwnProperty("number")); //hasOwnProperty

console.log("number" in product); //in operator

console.log(product.number !==  undefined );