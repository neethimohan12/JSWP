import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
export interface User {
 id: number;
 name: string;
 email: string;
}
@Injectable({
 providedIn: 'root' // Available app-wide
})
export class UserService {
 private apiUrl = 'http://localhost:3000/api/users';
 constructor(private http: HttpClient) { }
 // Get all users from server
 getUsers(): Observable<User[]> {
 return this.http.get<User[]>(this.apiUrl);
 }

 // Create new user
 createUser(user: User): Observable<User> {
 return this.http.post<User>(this.apiUrl, user);
 }

 // Delete user
 deleteUser(id: number): Observable<void> {
 return this.http.delete<void>(`${this.apiUrl}/${id}`);
 }
}
