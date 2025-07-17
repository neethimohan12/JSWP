import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UserService, User } from '../user.service';
@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent implements OnInit {
  users: User[] = [];
  loading = false;
  newUserName = '';
  newUserEmail = '';
  constructor(private userService: UserService) {}
  ngOnInit() {
    this.loadUsers();
  }
  loadUsers() {
    this.loading = true;
    this.userService.getUsers().subscribe({
      next: (data) => {
        this.users = data;
        this.loading = false;
      },
      error: (err) => {
        console.error('Error loading users:', err);
        this.loading = false;
      },
    });
  }
  addUser() {
    if (this.newUserName && this.newUserEmail) {
      const newUser: User = {
        id: 0, // Server will assign ID
        name: this.newUserName,
        email: this.newUserEmail,
      };
      this.userService.createUser(newUser).subscribe({
        next: (user) => {
          this.users.push(user);
          this.newUserName = '';
          this.newUserEmail = '';
        },
      });
      error: (err :unknown) => console.error('Error adding user:', err);
    }
  }
  deleteUser(id: number) {
    if (confirm('Are you sure?')) {
      this.userService.deleteUser(id).subscribe({
        next: () => {
          this.users = this.users.filter((u) => u.id !== id);
        },
      });
      error: (err : unknown) => console.error('Error deleting user:', err);
    }
  }
}