import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';

import {
  debounceTime, distinctUntilChanged, switchMap
} from 'rxjs/operators';

import { ApiService } from "../api.service";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  query$: Observable<any>;
  results: any[];

  private searchTerms = new Subject<string>();

  constructor(
    private apiService: ApiService,
  ) { }

  // Push a search term into the observable stream.
  search(term: string): void {
    this.searchTerms.next(term);
  }

  getDetails(type: string, id: number): any {
    if (type === "movie") {
      return this.apiService.getMovieDetails(id).subscribe((data) => {
        console.log(data['id']);
        window.location.assign(`/movie/${data['id']}`);
        // this.ngOnInit();

      });
    } else if (type === "tv") {
      return this.apiService.getTvDetails(id).subscribe((data) => {
        console.log(data['id']);
        window.location.assign(`/tv/${data['id']}`);
        // this.ngOnInit();

      });
    } else if (type === "person") {
      return this.apiService.getPeopleDetails(id).subscribe((data) => {
        console.log(data['id']);
        window.location.assign(`/person/${data['id']}`);
        // this.ngOnInit();

      });
    }
  }

  ngOnInit(): void {
    this.query$ = this.searchTerms.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(500),

      // ignore new term if same as previous term
      distinctUntilChanged(),

      // switch to new search observable each time the term changes
      switchMap((term: string) => this.apiService.searchMulti(term)),
    );
  }
}
