function outer(x) {
 
 function inner(y) {
 return x + y; 
 }
 return inner;
}
const addTen = outer(10);
console.log(addTen(23)); 
console.log(addTen(235)); 

