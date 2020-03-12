import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap, timestamp } from 'rxjs/operators';

import { environment } from "../environments/environment-api";
import { Movie } from './movie';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private baseUrl = environment.apiBase;  // URL to web api
  private key = environment.apiKey;  // URL to web api key | Replace the value with your own

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient
  ) { }

  getLatestReleases(): Observable<any[]> {

    return this.http.get<any[]>(`${this.baseUrl}/discover/movie${this.key}&sort_by=release_date.desc&primary_release_date.lte=2020-12-30&include_adult=false&include_video=false&page=1`)
      .pipe(
        tap(_ => console.log('fetched trending')),
        catchError(this.handleError<any[]>('getLatestReleases', []))
      );
  }

  getTrending(page: number): Observable<Movie[]> {
    console.log(`getTrending page: ${page}`);
    return this.http.get<Movie[]>(`${this.baseUrl}/trending/movie/week${this.key}&page=${page}`)
      .pipe(
        tap(_ => console.log('fetched trending')),
        catchError(this.handleError<Movie[]>('getTrending', []))
      );
  }

  getPopular(page: number): Observable<Movie[]> {
    console.log(`getPopular page: ${page}`);

    return this.http.get<Movie[]>(`${this.baseUrl}/movie/popular${this.key}&page=${page}`)
      .pipe(
        tap(_ => console.log('fetched popular')),
        catchError(this.handleError<Movie[]>('getPopular', []))
      );
  }

  getMovieDetails(id: number): Observable<Movie[]> {
    console.log(`getMovieDetails id: ${id}`);
    return this.http.get<Movie[]>(`${this.baseUrl}/movie/${id}${this.key}&append_to_response=credits`)
      .pipe(
        tap(_ => console.log('fetched movie details')),
        catchError(this.handleError<Movie[]>('getMovieDetails', []))
      );
  }

  getPeopleDetails(id: number): Observable<any[]> {
    console.log(`getMovieDetails id: ${id}`);
    return this.http.get<any[]>(`${this.baseUrl}/person/${id}${this.key}&append_to_response=combined_credits`)
      .pipe(
        tap(_ => console.log('fetched person details')),
        catchError(this.handleError<any[]>('getPersonDetails', []))
      );
  }

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
