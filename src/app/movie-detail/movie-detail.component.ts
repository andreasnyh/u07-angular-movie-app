import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

import { Movie } from "../movie";
import { ApiService } from "../api.service";

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})

export class MovieDetailComponent implements OnInit {

  movie: Movie[];

  constructor(
    private apiService: ApiService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.getMovieDetails();
  }

  getMovieDetails(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.apiService.getMovieDetails(id)
      .subscribe(movie => this.movie = movie);
  };

}
