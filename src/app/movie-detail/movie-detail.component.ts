import {Component, OnInit, Input} from '@angular/core';
import {DatabaseService} from "../database.service";

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {
  @Input() movie: any = {};
  test: any = {};
  movieValid: boolean;
  makeFav: boolean;
  constructor(private databaseService: DatabaseService) { }

  ngOnInit() {
    
  }

  ngOnChanges(){
    if(Object.keys(this.movie).length !== 0){
      this.movieValid = true;
      if(typeof this.movie === 'string'){
        this.movie = JSON.parse(this.movie);
      }

      if(this.movie.Title){
        let favMovies = this.databaseService.getFavoriteMovies();
        let favMovie = favMovies.filter((element: any) => {
          return element.Title === this.movie.Title;
        });
        if(favMovie.length){
          this.makeFav = true;
        } else {
          this.makeFav = false;
        }
      }

    }else {
      this.movieValid = false;
    }
  }
  addToFavorites(movie: any){
    this.makeFav = ! this.makeFav;
    if(this.makeFav){
      // add to favorites
      this.databaseService.setFavoriteMovies(movie);
    } else {
      // remove from favorites
      this.databaseService.removeFavoriteMovie(movie);
    }
  }
}
