import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  movieImg = ConstantsURI.pathImg;

  constructor(
    private readonly _apiService: ApiService<any>,
    private readonly _router: Router
  ) {}

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

  seeDetail(id: number): void {
    this._router.navigate([`popular/detail/${id}`])
  }
}
