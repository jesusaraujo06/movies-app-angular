import { Component } from '@angular/core';
import { ApiService } from './services/api.service';
import { ConstantURI } from './utils/constantURI';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private _apiService: ApiService<any>) {
    const getConfig = {
      url: ConstantURI.tokenNew,
      params: { api_key: ConstantURI.apiKey },
    };
    this._apiService.getService(getConfig).subscribe((val) => {
      const { request_token } = val;
      sessionStorage.setItem('requestToken', request_token);
    });
  }

  title = 'movies-app-angular';
}
