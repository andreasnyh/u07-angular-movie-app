import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';



@Component({
  selector: 'app-people-detail',
  templateUrl: './people-detail.component.html',
  styleUrls: ['./people-detail.component.css']
})

export class PeopleDetailComponent implements OnInit {

  person: any;

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
      .subscribe(person => this.person = person);
  };
}

