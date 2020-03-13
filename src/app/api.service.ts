import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap, timestamp } from 'rxjs/operators';
import { Movie } from './movie';

// ************    Remove this import if you've cloned the project     ************ //
// import { environment } from "../environments/environment-api";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  // ************    Replace the key value with your own key     ************ //
  private key = '?api_key=YourKey';
  private baseUrl = 'https://api.themoviedb.org/3';  // URL to web API
  // ************  https://www.themoviedb.org/documentation/api  ************ //

  // private key = environment.apiKey; // Private API key
  // private baseUrl = environment.apiBase;  // URL to web API

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient
  ) { }

  // ToDo Make date dynamic
  // Returns list of upcoming releases this year (hard coded to 2020-12-30)
  getLatestReleases(): Observable<any[]> {

    return this.http.get<any[]>(`${this.baseUrl}/discover/movie${this.key}&sort_by=release_date.desc&primary_release_date.lte=2020-12-30&include_adult=false&include_video=false&page=1`)
      .pipe(
        tap(_ => console.log('fetched trending')),
        catchError(this.handleError<any[]>('getLatestReleases', []))
      );
  }

  // Returns list of trending movies 20/page - 1000 pages
  getTrending(page: number): Observable<Movie[]> {
    console.log(`getTrending page: ${page}`);
    return this.http.get<Movie[]>(`${this.baseUrl}/trending/movie/week${this.key}&page=${page}`)
      .pipe(
        tap(_ => console.log('fetched trending')),
        catchError(this.handleError<Movie[]>('getTrending', []))
      );
  }

  // Returns list of popular movies 20/page - 500 pages
  getPopular(page: number): Observable<Movie[]> {
    console.log(`getPopular page: ${page}`);

    return this.http.get<Movie[]>(`${this.baseUrl}/movie/popular${this.key}&page=${page}`)
      .pipe(
        tap(_ => console.log('fetched popular')),
        catchError(this.handleError<Movie[]>('getPopular', []))
      );
  }

  // Return details of a movie
  getMovieDetails(id: number): Observable<Movie[]> {
    console.log(`getMovieDetails id: ${id}`);
    return this.http.get<Movie[]>(`${this.baseUrl}/movie/${id}${this.key}&append_to_response=credits`)
      .pipe(
        tap(_ => console.log('fetched movie details')),
        catchError(this.handleError<Movie[]>('getMovieDetails', []))
      );
  }

  // Return details of a person
  getPeopleDetails(id: number): Observable<any[]> {
    console.log(`getMovieDetails id: ${id}`);
    return this.http.get<any[]>(`${this.baseUrl}/person/${id}${this.key}&append_to_response=combined_credits`)
      .pipe(
        tap(_ => console.log('fetched person details')),
        catchError(this.handleError<any[]>('getPersonDetails', []))
      );
  }

  // Return details of a tv show
  getTvDetails(id: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/tv/${id}${this.key}&append_to_response=credits`)
      .pipe(
        tap(_ => console.log('fetched tv details')),
        catchError(this.handleError<any[]>('getTvDetails', []))
      );
  }

  /* GET Movies, tv-series and people that contains search term */
  searchMulti(term: string): Observable<any> {
    if (!term.trim()) {
      return of([]);
    }
    return this.http.get<any>(`${this.baseUrl}/search/multi/${this.key}&query=${term}`).pipe(
      tap(x => x.length ?
        console.log(`found results matching "${term}"`) :
        console.log(`no results matching "${term}"`)),
      catchError(this.handleError<any>('searchMulti', []))
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
