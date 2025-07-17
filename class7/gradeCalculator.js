// Calculate average grade - but it's not working!
function calculateAverage() {
let grades = [85, 90, 78, 92, 88];
let total = 0;
// Bug in this loop
for (let i = 0; i < grades.length; i++) {
total += grades[i];
}
let average = total / grades.length;
console.log("Average grade: " + average);
// Bug in grade letter
if (average >= 90) {
console.log("Grade: A");
} else if (average >= 80) {
console.log("Grade: B");
} else if (average >= 70) {
console.log("Grade: C");
}else {
    console.log("Grade: F");
}
}
calculateAverage();
