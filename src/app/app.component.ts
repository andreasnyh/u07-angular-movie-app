import { Component } from '@angular/core';
import { Router, ActivatedRoute, Event, NavigationStart, NavigationEnd, NavigationError, UrlSegment } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'u07-angular-movie-app';
  temp_url: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
  ) {
/*
    this.router.events.subscribe((event: Event) => {
      console.log(event);
      if (event instanceof NavigationStart) {
          // Show loading indicator
          console.log(`EventStart temp url: ${this.temp_url}`);
          console.log(`EventStart event url: ${event.url}`);

        }

        if (event instanceof NavigationEnd) {
          // this.temp_url = event.url;
          // Hide loading indicator

          console.log(`EventEnd temp url: ${this.temp_url}`);
          console.log(`EventEnd event url: ${event.url}`);

          if (this.temp_url !== event.url) {
            this.temp_url = event.url;
            // window.location.assign(event.url);
          }
      }

      if (event instanceof NavigationError) {
          // Hide loading indicator
          // Present error to user
          console.log(event.error);
      }
  });
   */
  }


  ngOnInit() {
    // this.temp_url =
    // this.temp_url = this.router.url;
  }




}

