let person = {};

person.firstName = "Neethi";
person.lastName = "Mohan";
person.age=23;
person.occupation="student";
person.hobbies =["cooking","fishing","Travelling"];
console.log(person);

person.address = "123 main street";

person.address = {
    street :"Main street",
    number : "123",
    city:"TOronto"
};

person.active =true;
person.greet = function(){
    return "hello there";
}
console.log(person.greet());

console.log(person);

let prop="address";
console.log(person[prop]);

person.address = "234 Downtown";

console.log(person[prop]);

delete person.address;
console.log(person.firstName);


