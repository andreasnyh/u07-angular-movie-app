import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

import { Movie } from "../movie";
import { ApiService } from "../api.service";

@Component({
  selector: 'app-trending',
  templateUrl: './trending.component.html',
  styleUrls: ['./trending.component.css']
})
export class TrendingComponent implements OnInit {

  title: 'Trending this week';
  trending: Movie[];
  page: number;


  constructor(
    private apiService: ApiService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.getTrending(1);
  }

  getTrending(page: number): void {
    // const page = +this.route.snapshot.paramMap.get('page');
    console.log(page);

    this.apiService.getTrending(page)
      .subscribe((trending) => {
        console.log(trending);

        this.trending = trending['results'];
        this.page = trending['page'];
      });

  }
}
