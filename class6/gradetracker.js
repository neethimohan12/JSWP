class GradeTracker {
  constructor(className) {
    this.className = className;
    this.students = [];
  }

  addStudent(name, grades) {
    // Push a new student object into the array
    this.students = [...this.students, { name, grades }];
  }

  getClassAverage() {
    const allAverages = this.students.map(student => {
      const total = student.grades.reduce((sum, grade) => sum + grade, 0);
      return total / student.grades.length;
    });

    const classTotal = allAverages.reduce((sum, avg) => sum + avg, 0);
    return (classTotal / allAverages.length).toFixed(2);
  }

  getPassingStudents() {
    return this.students.filter(student => {
      const avg = student.grades.reduce((sum, grade) => sum + grade, 0) / student.grades.length;
      return avg >= 70;
    });
  }
}

// 🔍 Test it!
const math101 = new GradeTracker("Math 101");

math101.addStudent("Alice", [85, 92, 88]); // average: 88.33
math101.addStudent("Bob", [75, 68, 82]);   // average: 75
math101.addStudent("Charlie", [60, 55, 65]); // average: 60

console.log("Class average:", math101.getClassAverage()); // should print approx 74.44
console.log("Passing students:", math101.getPassingStudents());