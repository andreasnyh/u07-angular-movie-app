import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-people-detail',
  templateUrl: './people-detail.component.html',
  styleUrls: ['./people-detail.component.scss']
})

export class PeopleDetailComponent implements OnInit {

  person: any;
  credits: any;

  constructor(
    private apiService: ApiService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.getPersonDetails();
  }

  getPersonDetails(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    console.log(id);

    this.apiService.getPeopleDetails(id)
      .subscribe((person) => {
        this.person = person;
        this.credits = person['combined_credits']['cast'].sort(function (a, b) {
          if ((a.poster_path !== null && b.poster_path !== null)) {
              return b.vote_average - a.vote_average;
            }
        });
      });
  }
}

