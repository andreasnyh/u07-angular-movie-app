import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TrendingComponent } from './trending/trending.component';
import { PopularComponent } from './popular/popular.component';
import { HomeComponent } from './home/home.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { PageNavigationComponent } from './page-navigation/page-navigation.component';
import { SearchComponent } from './search/search.component';
import { PeopleDetailComponent } from './people-detail/people-detail.component';
import { TvDetailComponent } from './tv-detail/tv-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    TrendingComponent,
    PopularComponent,
    HomeComponent,
    MovieDetailComponent,
    PageNavigationComponent,
    SearchComponent,
    PeopleDetailComponent,
    TvDetailComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
