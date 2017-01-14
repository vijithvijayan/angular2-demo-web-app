import {Component} from '@angular/core';
import {DatabaseService} from '../database.service';

@Component({
  selector: 'app-movie-query',
  templateUrl: './movie-query.component.html',
  styleUrls: ['./movie-query.component.css']
})
export class MovieQueryComponent {
  movieName: string;
  movie: any = {
    name: '',
    year: new Date().getFullYear(),
    plot: 'full',
    tomatoes: true
  };
  dataLoaded: boolean;
  noMovieFound: boolean = false;
  response: any = {};

  constructor(private databaseService: DatabaseService) { }

  submitData(movieForm: any) {
    this.response = '';
    this.dataLoaded = false;
    this.noMovieFound = false;
    this.databaseService.getData(this.movie.name, this.movie.year, this.movie.plot, this.movie.tomatoes).subscribe(
      (response: any) => this.handleResponse(response),
      (error: any) => this.handleError(error),
      () => this.onComplete()
    );
    this.resetForm({});
  }

  handleResponse = (response: any) => {
    let data = JSON.parse(response._body);
    if(!data.Error){
      this.response = data;
    } else {
      this.response = '';
      this.noMovieFound = true;
    }

  };
  handleError = (error: any) => {
    this.dataLoaded = false;
  };

  onComplete = () => {
    this.dataLoaded = true;
  };

  resetForm(event: any) {
    this.movie.name = '';
    this.movie.plot = 'full';
    this.movie.year = new Date().getFullYear();
  }

}
