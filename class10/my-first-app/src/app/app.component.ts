import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { StudentGraderComponent } from './student-grader/student-grader.component';
@Component({
 selector: 'app-root',
 imports: [RouterOutlet, UserListComponent,StudentGraderComponent],
 templateUrl: './app.component.html',
 styleUrl: './app.component.css'
})
export class AppComponent {
 title = 'user-service';
}