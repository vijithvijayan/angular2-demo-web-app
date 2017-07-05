import {Component} from '@angular/core';
import {DatabaseService} from '../database.service';

@Component({
  selector: 'app-movie-query',
  templateUrl: './movie-query.component.html',
  styleUrls: ['./movie-query.component.css']
})
export class MovieQueryComponent {
  movie: any = {
    name: '',
    designation: ''
  };
  dataLoaded: boolean;
  response: any = {};

  constructor(private databaseService: DatabaseService) { }

  submitData(movieForm: any) {
    this.response = '';
    this.dataLoaded = false;

    this.databaseService.addEmp(this.movie).subscribe(
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
    this.movie.designation = '';
  }

}
