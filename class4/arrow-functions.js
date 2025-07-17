function add(a, b){
    return a + b;
}

const newAdd = (a, b) => {
    return a + b;
};

const newAdd1 = (a, b) => a + b;

const randomNumber = () => Math.random();

const greet = (Name) => `Hello ${Name}`;

console.log(newAdd(1, 3));
console.log(randomNumber());
console.log(greet("neethi"));

const taxCalculator = (price, rate) => price + (price *rate);

console.log(taxCalculator(100, 0.13));

let multiple2 = (n) => n * 2;

console.log(multiple2(5));
console.log(multiple2(10));

const getFullName = (firstName, lastName) => `${firstName} ${lastName}`;

console.log(getFullName("Neethi", "Mohan")); 

const createUser =(userName, age) => ({name: userName, age: age});
console.log(createUser(Anion,15));