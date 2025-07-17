function greet(greeting, puntuation){
    return `${greeting} ${this.name} ${puntuation}`;

}

const person1 ={ name: "neethi" };
const person2 ={ name: "amaya" };

//console.log(greet.call({name : "neethi" } , "hello","!"));
console.log(greet.call(person1, "hello","!"));
console.log(greet.call(person2, "hello","!"));

const calculator = {
 taxRate: 0.08,
 taxCalculator: function (price) {
    return price + price * this.taxRate;

 },
};

const canadaTax ={taxRate: 0.18};
const UKTax ={taxRate: 0.2};

console.log(calculator.taxCalculator(1000));
console.log(calculator.taxCalculator.call(canadaTax,1000));
console.log(calculator.taxCalculator.call(UKTax,1000));

