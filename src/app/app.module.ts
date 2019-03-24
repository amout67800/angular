import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { MatButtonModule, MatTableModule, MatPaginatorModule, MatSelectModule, MatInputModule, MatMenuModule, MatFormFieldModule, MatCheckboxModule, MatRadioModule, MatIconModule } from '@angular/material';
import { MaterialModule } from './material.module';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { TableComponent } from './shared/components/table/table.component';
import { MainMenuComponent } from './shared/components/main-menu/main-menu.component';

import { UsersListComponent } from './common/components/users-list/users-list.component';
import { TravelsListComponent } from './common/components/travels-list/travels-list.component';
import { AdminAccountCreateComponent } from './common/components/admin-account-create/admin-account-create.component';
import { MessagesComponent } from './common/components/messages/messages.component';
import { LoginComponent } from './shared/components/login/login.component';
import { TravelCreateComponent } from './common/components/travel-create/travel-create.component';
import { HomeComponent } from './common/components/home/home.component';
import { SignInComponent } from './shared/components/sign-in/sign-in.component';
import { SignUpComponent } from './shared/components/sign-up/sign-up.component';
import { ForgetPasswordComponent } from './shared/components/forget-password/forget-password.component';
import { PlacesListComponent } from './common/components/places-list/places-list.component';
import { PlaceCreateComponent } from './common/components/place-create/place-create.component';

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
    TravelCreateComponent,
    HomeComponent,
    SignInComponent,
    SignUpComponent,
    ForgetPasswordComponent,
    PlacesListComponent,
    PlaceCreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    // MatButtonModule,
    // MatTableModule,
    // MatPaginatorModule,
    // MatSelectModule,
    // MatInputModule,
    // MatMenuModule,
    // MatFormFieldModule,
    // MatCheckboxModule, 
    // MatRadioModule,
    // MatIconModule,
    HttpClientModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
