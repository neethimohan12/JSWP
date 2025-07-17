// Sample data: list of students
let students = [
  {
    name: "Amaya",
    grades: {
      Math: 80,
      English: 85,
      Science: 72,
    },
    average: 0, // Placeholder for average
  },

  {
    name: "Arjun",
    grades: {
      Math: 89,
      English: 82,
      Science: 78,
    },
    average: 0, // Placeholder for average
  },
  {
    name: "Aadhya",
    grades: {
      Math: 90,
      English: 89,
      Science: 88,
    },
    average: 0, // Placeholder for average
  }
];

// Calculate average for each student and add it to their object
students.forEach(student => {
  let total = 0;
  let count = 0;
  for (let subject in student.grades) {
    total += student.grades[subject];
    count++;
  }
  student.average = (total / count).toFixed(2); // Store average with 2 decimal places
});

// Print report cards for all students
students.forEach(student => {
  console.log(`Report Card for ${student.name}`);
  for (let subject in student.grades) {
    console.log(`  ${subject}: ${student.grades[subject]}`);
  }
  console.log(`  Average: ${student.average}\n`);
});

// Find the top performer
let topStudent = students[0]; // Assume the first student is the top performer
students.forEach(student => {
  if (parseFloat(student.average) > parseFloat(topStudent.average)) {
    topStudent = student; // Update if a student has a higher average
  }
});

// Output the top performer
console.log(`Top Performer: ${topStudent.name} with average ${topStudent.average}`);