import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TrendingComponent } from './trending/trending.component';
import { PopularComponent } from './popular/popular.component';
import { HomeComponent } from "./home/home.component";
import { MovieDetailComponent } from "./movie-detail/movie-detail.component";

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'trending/:page', component: TrendingComponent },
  { path: 'popular', component: PopularComponent },
  { path: 'detail/:id', component: MovieDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
