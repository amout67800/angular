import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TableComponent } from './shared/components/table/table.component';
import { TravelsListComponent } from './common/components/travels-list/travels-list.component';
import { UsersListComponent } from './common/components/users-list/users-list.component';
import { TravelComponent } from './common/components/travel/travel.component';
import { HomeComponent } from './common/components/home/home.component';
import { LoginComponent } from './shared/components/login/login.component';
import { PlacesListComponent } from './common/components/places-list/places-list.component';
import { PlaceComponent } from './common/components/place/place.component';

const appRoutes: Routes = [
  { path: 'table', component: TableComponent },
  { path: 'users', component: UsersListComponent },
  { path: 'travels', component: TravelsListComponent },
  { path: 'travel/create', component: TravelComponent },
  { path: 'login', component: LoginComponent },
  { path: 'places', component: PlacesListComponent },
  { path: 'place/create', component: PlaceComponent },
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
