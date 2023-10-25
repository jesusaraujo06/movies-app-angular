import { Component } from '@angular/core';
import { ApiService } from './services/api.service';
import { ConstantsURI } from './utils/constantURI';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private _apiService: ApiService<any>) {
    const getConfig = {
      url: ConstantsURI.tokenNew,
      params: { api_key: ConstantsURI.apiKey },
    };
    this._apiService.getService(getConfig).subscribe((val) => {
      const { request_token } = val;
      sessionStorage.setItem('requestToken', request_token);
    });
  }

  title = 'movies-app-angular';
}
