import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { TableComponent } from './shared/components/table/table.component';
import { MainMenuComponent } from './shared/components/main-menu/main-menu.component';

import { UsersListComponent } from './common/components/users-list/users-list.component';
import { TravelsListComponent } from './common/components/travels-list/travels-list.component';
import { AdminAccountCreateComponent } from './common/components/admin-account-create/admin-account-create.component';
import { MessagesComponent } from './shared/components/messages/messages.component';
import { LoginComponent } from './shared/components/login/login.component';
import { HomeComponent } from './common/components/home/home.component';
import { SignInComponent } from './shared/components/sign-in/sign-in.component';
import { SignUpComponent } from './shared/components/sign-up/sign-up.component';
import { ForgetPasswordComponent } from './shared/components/forget-password/forget-password.component';
import { PlacesListComponent } from './common/components/places-list/places-list.component';
import { ActionsButtonsComponent, ActionsButtonsDialog } from './shared/components/actions-buttons/actions-buttons.component';
import { TravelComponent } from './common/components/travel/travel.component';
import { PlaceComponent } from './common/components/place/place.component';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    MainMenuComponent,
    UsersListComponent,
    TravelsListComponent,
    AdminAccountCreateComponent,
    MessagesComponent,
    LoginComponent,
    HomeComponent,
    SignInComponent,
    SignUpComponent,
    ForgetPasswordComponent,
    PlacesListComponent,
    ActionsButtonsComponent,
    ActionsButtonsDialog,
    TravelComponent,
    PlaceComponent
  ],
  entryComponents: [ActionsButtonsDialog],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
