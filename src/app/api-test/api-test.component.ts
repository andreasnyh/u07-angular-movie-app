import { Component, OnInit } from '@angular/core';
import { environment } from "../../environments/environment-api";

@Component({
  selector: 'app-api-test',
  templateUrl: './api-test.component.html',
  styleUrls: ['./api-test.component.css']
})
export class ApiTestComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log(environment.apiKey);

  }

  apiKey = environment.apiKey;

}
