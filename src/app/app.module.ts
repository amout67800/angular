import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CKEditorModule } from '@ckeditor/ckeditor5-angular';

import { TableComponent } from './shared/components/table/table.component';
import { MainMenuComponent } from './shared/components/main-menu/main-menu.component';
import { UsersListComponent } from './public/components/users-list/users-list.component';
import { TravelsListComponent } from './public/components/travels-list/travels-list.component';
import { MessagesComponent } from './shared/components/messages/messages.component';
import { LoginComponent } from './shared/components/login/login.component';
import { HomeComponent } from './public/components/home/home.component';
import { SignInComponent } from './shared/components/sign-in/sign-in.component';
import { SignUpComponent } from './shared/components/sign-up/sign-up.component';
import { ForgetPasswordComponent } from './shared/components/forget-password/forget-password.component';
import { PlacesListComponent } from './public/components/places-list/places-list.component';
import { ActionsButtonsComponent, ActionsButtonsDialog } from './shared/components/actions-buttons/actions-buttons.component';
import { TravelComponent } from './public/components/travel/travel.component';
import { PlaceComponent } from './public/components/place/place.component';
import { ArticleComponent } from './public/components/article/article.component';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    MainMenuComponent,
    UsersListComponent,
    TravelsListComponent,
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
    PlaceComponent,
    ArticleComponent
  ],
  entryComponents: [ActionsButtonsDialog],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    MaterialModule,
    CKEditorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
