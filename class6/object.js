// A person object
const person = {
 // Properties (characteristics)
 name: "Alice",
 age: 25,
 job: "Developer",

 // Methods (things they can do)
 greet: function() {
 console.log("Hi, I'm " + this.name);
 },
 haveBirthday: function() {
 this.age = this.age + 1;
 console.log("Now I'm " + this.age + " years old!");
 }
};
// Using the object
person.greet(); // "Hi, I'm Alice"
person.haveBirthday(); // "Now I'm 26 years old!"
