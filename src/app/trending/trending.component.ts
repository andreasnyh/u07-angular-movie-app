import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

import { Movie } from "../movie";
import { ApiService } from "../api.service";

@Component({
  selector: 'app-trending',
  templateUrl: './trending.component.html',
  styleUrls: ['./trending.component.scss']
})
export class TrendingComponent implements OnInit {

  title: 'Trending this week';
  trending: Movie[];
  page: number;
  totalPages: number;


  constructor(
    private apiService: ApiService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    const page = +this.route.snapshot.paramMap.get('page');
    this.getTrending(page);
  }

  getTrending(page: number): void {
    this.apiService.getTrending(page)
      .subscribe((trending) => {
        this.trending = trending['results'];
        this.page = trending['page'];
        this.totalPages = trending['total_pages'];
      });
  }
}
