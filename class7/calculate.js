function doStuff(x,y,z) {
let  a=x*y;
let  b=a+z;
if(b>100){
    return b*2;
}else{
    return b/2;
}

}

function calculateBonus(salary, performanceScore, yearsWorked) {

console.log(`Calculating bonus for:, ${salary}, ${performanceScore}, ${yearsWorked}`);

// Check inputs

if (salary <= 0 || performanceScore < 0 || yearsWorked < 0) {

console.log("Invalid input values");

return 0;

}

let baseBonus = salary * performanceScore;

console.log("Base bonus:", baseBonus);

let totalBonus = baseBonus + yearsWorked;

if (totalBonus > 100) {
console.log("totalbonus is greater than 100");
return totalBonus * 2;

} else {
console.log("totalbonus is less than 100");
return totalBonus / 2;

}

console.log(`Total bonus before adjustment:, ${totalBonus}`);

}

let finalBonus = calculateBonus(50, 1.5, 10);
console.log("Final Bonus:", finalBonus);