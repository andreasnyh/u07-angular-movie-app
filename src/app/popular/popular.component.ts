import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

import { Movie } from '../movie';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-popular',
  templateUrl: './popular.component.html',
  styleUrls: ['./popular.component.css']
})
export class PopularComponent implements OnInit {
  title = 'Popular';
  popular: Movie[];
  page: number;

  constructor(
    private apiService: ApiService,
    private route: ActivatedRoute,
    ) { }

  ngOnInit() {
    this.getPopular(1);
  }

  getPopular(page: number): void {
    console.log(page);

    this.apiService.getPopular(page)
      .subscribe((popular) => {
        console.log(popular);

        this.popular = popular['results'];
        this.page = popular['page'];

      });

  }
}
