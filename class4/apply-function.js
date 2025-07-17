function greetMany(greeting, ...names) {
 console.log(`${greeting} ${names.join(', ')}! I'm ${this.name}.`);
}
const host = { name: "Sarah" };

// let data = null;
// console.log(data.length);


greetMany.call(host, "Welcome", "John", "Jane", "Bob"); 

const guests = ["John", "Jane", "Bob"];
greetMany.apply(host, ["Welcome", ...guests]);