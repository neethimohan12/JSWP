let calculator = {
    type: "Advanced",
    brand: "Casio" ,

    add: function (a,b) {
        return a + b;

    },
    subtract: function (a,b) {
        return a - b;

    },
    multiply: function (a,b) {
        return a * b;

    },
    division: function (a,b) {
        return a / b;
    },
    power: function (a,b){
        return a ^ b;
    }
    

};

console.log(calculator.add(4,6));
console.log(calculator.subtract(4,6));
console.log(calculator.multiply(4,6));
console.log(calculator.division(4,6));
console.log(calculator.power(4,6));