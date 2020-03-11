import { Component, OnInit } from '@angular/core';

import { ApiService } from '../api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  latest: any;

  constructor(
    private apiService: ApiService,
  ) { }

  ngOnInit(): void {
    this.getLatest();
  }

  getLatest(): void {

    this.apiService.getLatestReleases()
    .subscribe((latest) => {
      console.log(latest);

      this.latest = latest['results'];

    });
  }
}
