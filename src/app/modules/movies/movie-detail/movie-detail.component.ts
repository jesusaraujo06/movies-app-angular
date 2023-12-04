import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieModel } from 'src/app/models/movie.model';
import { ApiService } from 'src/app/services/api.service';
import { ConstantsURI } from 'src/app/utils/constantURI';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {
  movie!: MovieModel.Movie;
  readonly imgBaseUrl = ConstantsURI.pathImg;

  constructor(
    private readonly _apiService: ApiService<any>,
    private readonly _activeRoute: ActivatedRoute,
    private readonly _router: Router
  ){}

  ngOnInit(): void {
    this._activeRoute.params.subscribe((val : any) => {
      this.getMoviesList(val.id);
    });
  }

  private getMoviesList(movieId: string){
    const getConfig = {
      url: `${ConstantsURI.movieDetail}/${movieId}`, 
      params: { api_key: ConstantsURI.apiKey}
    };

    this._apiService.getService(getConfig).subscribe(val => {
      this.movie = val;
    });
  }

  goBack(){
    this._router.navigate(['/popular'])
  }
}
