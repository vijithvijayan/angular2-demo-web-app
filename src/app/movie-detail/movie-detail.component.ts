import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {
  @Input() movie: any = {};
  test: any = {};
  movieValid: boolean;
  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(){
    if(Object.keys(this.movie).length !== 0){
      this.movieValid = true;
      this.movie = JSON.parse(this.movie);
    }else {
      this.movieValid = false;
    }
  }
}
