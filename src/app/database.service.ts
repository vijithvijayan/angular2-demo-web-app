import { Injectable } from '@angular/core';
import {Http, URLSearchParams} from "@angular/http";

@Injectable()
export class DatabaseService {
  private favMovies: Array<any> = [];
  constructor(private http:Http) { }

  // returns Observable
  getData(title: string, year?: number, plot?: string, tomatoes?: boolean){

    return this.http
      .get(`http://www.omdbapi.com/`, {
        search: `t=${title}&y${year}=&plot=${plot}&r=json&tomatoes=${tomatoes}`
      });
  }

  setFavoriteMovies(movie: any){
    this.favMovies.push(movie);
  }

  getFavoriteMovies(): Array<any> {
    return this.favMovies;
  }

  removeFavoriteMovie(movie: any) {
    let movieToRemove = this.favMovies.filter((m: any) => {
      return m.Title === movie.Title;
    });

    this.favMovies.splice(this.favMovies.indexOf(movieToRemove[0]), 1);
  }
}
