import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { environment } from "../environments/environment-api";
import { Movie } from './movie';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private baseUrl = environment.apiBase;  // URL to web api
  private key = environment.apiKey;  // URL to web api key

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient
  ) { }

  getTrending(page: number): Observable<Movie[]> {
    console.log(`getTrending page: ${page}`);
    return this.http.get<Movie[]>(`${this.baseUrl}/trending/movie/week${this.key}&page=${page}`)
      .pipe(
        tap(_ => console.log('fetched trending')),
        catchError(this.handleError<Movie[]>('getTrending', []))
      );
  }

  getPopular(): Observable<Movie[]> {
    return this.http.get<Movie[]>(`${this.baseUrl}/movie/popular${this.key}&page=1`)
      .pipe(
        tap(_ => console.log('fetched popular')),
        catchError(this.handleError<Movie[]>('getPopular', []))
      );
  }

  getMovieDetails(id: number): Observable<Movie[]> {
    console.log(`getMovieDetails id: ${id}`);
    return this.http.get<Movie[]>(`${this.baseUrl}/movie/${id}${this.key}`)
      .pipe(
        tap(_ => console.log('fetched movie details')),
        catchError(this.handleError<Movie[]>('getMovieDetails', []))
      );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}
