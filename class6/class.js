class Person {
 constructor(name, age) {
 this.name = name;
 this.age = age;
 }

 greet() {
 console.log(`Hello, I'm ${this.name}!`);
 }

 haveBirthday() {
 this.age++;
 console.log(`Happy birthday! Now ${this.age} years old.`);
 }

 isAdult() {
    return this.age >= 18;
  }
}


let alice = new Person("Alice", 25);
let amaya = new Person("Amaya", 30);
let neethi = new Person("Neethi",32);
alice.greet(); 
amaya.haveBirthday(); 
neethi.greet(); 
console.log(amaya.isAdult()); 