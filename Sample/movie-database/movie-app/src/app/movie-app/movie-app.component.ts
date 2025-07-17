import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-movie-app',
  templateUrl: './movie-app.component.html',
  styleUrls: ['./movie-app.component.css']
})
export class MovieAppComponent implements OnInit {
  movies: any[] = [];
  newMovie = { title: '', description: '' };
  searchTerm: string = '';

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.loadMovies();
  }

  loadMovies() {
    this.http.get<any[]>('http://localhost:3000/api/movies')
      .subscribe(data => this.movies = data);
  }

  addMovie() {
    if (!this.newMovie.title || !this.newMovie.description) return;

    this.http.post('http://localhost:3000/api/movies', this.newMovie)
      .subscribe(() => {
        this.newMovie = { title: '', description: '' };
        this.loadMovies();
      });
  }

  rateMovie(movieId: number, rating: number) {
    this.http.post(`http://localhost:3000/api/movies/${movieId}/rate`, { rating })
      .subscribe(() => this.loadMovies());
  }

  searchMovies() {
    if (this.searchTerm.trim()) {
      this.http.get<any[]>(`http://localhost:3000/api/movies/search?q=${this.searchTerm}`)
        .subscribe(data => this.movies = data);
    } else {
      this.loadMovies();
    }
  }
}
