import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-tv-detail',
  templateUrl: './tv-detail.component.html',
  styleUrls: ['./tv-detail.component.scss']
})

export class TvDetailComponent implements OnInit {

  tv: any;

  constructor(
    private apiService: ApiService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.getTvDetails();
  }

  getTvDetails(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    console.log(id);

    this.apiService.getTvDetails(id)
      .subscribe(tv => this.tv = tv);
  };

}
