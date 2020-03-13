import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

import { Movie } from '../movie';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-popular',
  templateUrl: './popular.component.html',
  styleUrls: ['./popular.component.scss']
})
export class PopularComponent implements OnInit {
  title = 'Popular';
  popular: Movie[];
  page: number;
  totalPages: number;

  constructor(
    private apiService: ApiService,
    private route: ActivatedRoute,
    ) { }

  ngOnInit() {
    const page = +this.route.snapshot.paramMap.get('page');
    this.getPopular(page);
  }

  getPopular(page: number): void {

    this.apiService.getPopular(page)
      .subscribe((popular) => {
        this.popular = popular['results'];
        this.page = popular['page'];
        this.totalPages = popular['total_pages'];

      });

  }
}
