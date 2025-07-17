import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
 selector: 'app-grade-tracker',
 standalone: true,
 imports: [CommonModule, FormsModule],
 templateUrl: './student-grader.component.html',
 styleUrls: ['./student-grader.component.css'],
})
export class StudentGraderComponent implements OnInit {
 students: any[] = [];
 newName = '';
 newGrade = 0;
 constructor(private http: HttpClient) {}
 ngOnInit() {
 this.loadStudents();
 }
 loadStudents() {
 this.http
 .get('http://localhost:3002/api/students')
 .subscribe((data: any) => {
 this.students = data;
 });
 }
 addStudent() {
 if (this.newName && this.newGrade >= 0 && this.newGrade <= 100) {
 const student = { name: this.newName, grade: this.newGrade };
 this.http
 .post('http://localhost:3002/api/students', student)
 .subscribe((newStudent: any) => {
 this.students.push(newStudent);
 this.newName = '';
 this.newGrade = 0;
 });
 }
 }
 getGradeLetter(grade: number) {
 if (grade >= 90) return 'A';
 if (grade >= 80) return 'B';
 if (grade >= 70) return 'C';
 if (grade >= 60) return 'D';
  return 'F';
 }
 getClassAverage() {
 if (this.students.length === 0) return 0;
 const sum = this.students.reduce((total, s) => total + s.grade, 0);
 return sum / this.students.length;
 }
}
