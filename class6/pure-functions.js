// Start with data
const employees = [
 { name: "Alice", dept: "Eng", salary: 95000 },
 { name: "Bob", dept: "Sales", salary: 75000 },
 { name: "Charlie", dept: "Eng", salary: 105000 }
];
// Chain methods together
const engineeringTotal = employees
 .filter(emp => emp.dept === "Eng")
 .map(emp => emp.salary)
 .reduce((sum, sal) => sum + sal, 0);
console.log(engineeringTotal); // 200000