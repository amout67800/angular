import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TableComponent } from './shared/components/table/table.component';
import { TravelsListComponent } from './public/components/travels-list/travels-list.component';
import { UsersListComponent } from './public/components/users-list/users-list.component';
import { TravelComponent } from './public/components/travel/travel.component';
import { HomeComponent } from './public/components/home/home.component';
import { LoginComponent } from './shared/components/login/login.component';
import { PlacesListComponent } from './public/components/places-list/places-list.component';
import { PlaceComponent } from './public/components/place/place.component';
import { ArticleComponent } from './public/components/article/article.component';

const appRoutes: Routes = [
  { path: 'table', component: TableComponent },
  { path: 'users', component: UsersListComponent },
  { path: 'travels', component: TravelsListComponent },
  { path: 'travel/create', component: TravelComponent },
  { path: 'login', component: LoginComponent },
  { path: 'places', component: PlacesListComponent },
  { path: 'place/create', component: PlaceComponent },
  { path: 'article', component: ArticleComponent },
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
