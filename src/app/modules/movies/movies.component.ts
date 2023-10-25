import { Component, OnInit } from '@angular/core';
import { MoviesModel } from 'src/app/models/movies.model';
import { ApiService } from 'src/app/services/api.service';
import { ConstantsURI } from 'src/app/utils/constantURI';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css'],
})
export class MoviesComponent implements OnInit {
  movies!: MoviesModel.MoviesResponse;

  constructor(private readonly _apiService: ApiService<any>) {}

  ngOnInit(): void {
    const getConfig = {
      url: ConstantsURI.popularMovies,
      params: { api_key: ConstantsURI.apiKey },
    };
    this._apiService
      .getService(getConfig)
      .subscribe((val: MoviesModel.MoviesResponse) => {
        this.movies = val;
        console.log(this.movies);
      });
  }

  seeDetail(): void {}
}
