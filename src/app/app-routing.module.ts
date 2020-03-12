import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TrendingComponent } from './trending/trending.component';
import { PopularComponent } from './popular/popular.component';
import { HomeComponent } from "./home/home.component";
import { MovieDetailComponent } from "./movie-detail/movie-detail.component";
import { PeopleDetailComponent } from "./people-detail/people-detail.component";
import { TvDetailComponent } from "./tv-detail/tv-detail.component";

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'trending/:page', component: TrendingComponent },
  { path: 'popular/:page', component: PopularComponent },
  { path: 'movie/:id', component: MovieDetailComponent },
  { path: 'person/:id', component: PeopleDetailComponent },
  { path: 'tv/:id', component: TvDetailComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(
    routes,
    { onSameUrlNavigation: 'reload' }
  )],
  exports: [RouterModule]
})

export class AppRoutingModule { }
