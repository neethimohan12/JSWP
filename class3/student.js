let students = [
 { name: "Alice", age: 22, grade: 85 },
 { name: "Bob", age: 21, grade: 92 },
 { name: "Charlie", age: 23, grade: 78 },
 { name: "Diana", age: 22, grade: 95 }
];

let aStudents = students.filter(student => student.grade >= 90);
console.log(aStudents); 

let aStudentName = students.map((student) => student.name);



