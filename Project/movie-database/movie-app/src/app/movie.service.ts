import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  private apiUrl = 'http://localhost:3000/api/movies';

  constructor(private http: HttpClient) {}

  getMovies(): Observable<any> {
    return this.http.get(`${this.apiUrl}`);
  }

  addMovie(movie: any): Observable<any> {
    return this.http.post(`${this.apiUrl}`, movie);
  }

  rateMovie(id: number, rating: number): Observable<any> {
    return this.http.post(`${this.apiUrl}/${id}/rate`, { rating });
  }

  searchMovies(query: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/search?q=${query}`);
  }
}
