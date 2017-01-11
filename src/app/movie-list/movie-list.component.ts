import { Component, OnInit } from '@angular/core';
import {DatabaseService} from "../database.service";

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  private favoritesList: Array<any> = [];
  constructor(private databaseService: DatabaseService) {
    this.favoritesList = this.databaseService.getFavoriteMovies();
  }

  ngOnInit() {
  }

}
