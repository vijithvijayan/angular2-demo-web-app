import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {LocationStrategy, HashLocationStrategy} from '@angular/common';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import {AboutComponent} from './about/about.component';
import {DatabaseService} from './database.service';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { MovieQueryComponent } from './movie-query/movie-query.component';
import {appRouterProviders} from './app.routes';
import { MovieListComponent } from './movie-list/movie-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MovieDetailComponent,
    MovieQueryComponent,
    AboutComponent,
    MovieListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    appRouterProviders
  ],
  providers: [
    {provide: LocationStrategy, useClass: HashLocationStrategy},
    DatabaseService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
