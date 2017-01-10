import {Component, OnInit} from '@angular/core';
import {DatabaseService} from '../database.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  movieName: string;
  movie: any = {
    name: '',
    year: new Date().getFullYear(),
    plot: 'full'
  };
  dataLoaded: boolean;
  response: any = {};

  constructor(private databaseService: DatabaseService) {
  }

  ngOnInit() {
  }

  submitData(movieForm: any) {
    this.databaseService.getData(this.movie.name, this.movie.year, this.movie.plot).subscribe(
      (response: any) => this.handleResponse(response),
      (error: any) => this.handleError(error),
      () => this.onComplete()
    );

    this.resetForm({});
  }

  handleResponse = (response: any) => {
    console.log('got response -> ', response._body);
    this.response = response._body;
  };
  handleError = (error: any) => {
    this.dataLoaded = false;
  };

  onComplete = () => {
    console.log('response completed');
    this.dataLoaded = true;
  };

  resetForm(event: any) {
    this.movie.name = '';
    this.movie.plot = 'full';
    this.movie.year = new Date().getFullYear();
  }

}
