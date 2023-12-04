import { Component, OnInit } from '@angular/core';
import { Api } from 'src/app/models/api.model';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-base',
  template: '',
  styleUrls: []
})
export class BaseComponent<T extends any> implements OnInit{
  loading: boolean = true;
  paramsConfig: Api.Params = {
    url: '',
    params: {},
    body: {}
  }

  constructor(
    protected readonly apiService: ApiService<T>
  ){}

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  getRequest(): void{
    this.apiService.getService(this.paramsConfig).subscribe({
      next: response => {
        console.log(response);
      },
      error: () => {},
      complete: () => {},
    });
  }

  postRequest(): void{
    this.apiService.postService(this.paramsConfig).subscribe({
      next: response => {
        console.log(response);
      },
      error: () => {},
      complete: () => {},
    });
  }
}
