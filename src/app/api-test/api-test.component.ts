import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import { environment } from "../../environments/environment-api";
import { Movie } from "../movie";
import { ApiService } from "../api.service";

@Component({
  selector: 'app-api-test',
  templateUrl: './api-test.component.html',
  styleUrls: ['./api-test.component.css']
})
export class ApiTestComponent implements OnInit {
  key = environment.apiKey;
  baseUrl = environment.apiBase;
  HttpClient: any;

  trending: Movie[];

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.getTrending();
  }

  getTrending(): void {
    this.apiService.getTrending()
      .subscribe((trending) => {
        console.log(trending);

        this.trending = trending['results'];

      });

  }
}
