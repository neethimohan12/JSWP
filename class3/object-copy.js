let original = {
    name: "John",
    age: 30,
    city: "Boston",
    address:{
        street: "123 main",
        number: 23,

    },
};

let copy = orogonal;
let copy1 = {  ...original }; //shallow copy
let copy2 = Object.assign({} , original); //deep copy of valuw

copy2name = "jane";
//copy.name = "jane";
//console.log(copy);

copy.address.street = "Downtown";
console.log(original);