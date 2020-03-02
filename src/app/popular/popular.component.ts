import { Component, OnInit } from '@angular/core';
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

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.getPopular();
  }

  getPopular(): void {
    this.apiService.getPopular()
      .subscribe((popular) => {
        console.log(popular);

        this.popular = popular['results'];

      });

  }
}
