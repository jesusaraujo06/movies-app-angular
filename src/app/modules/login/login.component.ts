import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';
import { ConstantURI } from 'src/app/utils/constantURI';
import { properties } from 'src/assets/properties/properties';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  imgLogin = properties.imgLogin;
  formLogin: FormGroup = new FormGroup({});

  // Aqui instanciamos una clase a través del constructor, a esto se le conoce como inyección de dependencia.
  constructor(
    private _fb: FormBuilder,
    private readonly _apiService: ApiService<any>
  ) {}

  ngOnInit(): void {
    this.formLogin = this._fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  Login(): void {
    if (this.formLogin.invalid) {
      this.formLogin.markAllAsTouched();
      return;
    }

    const { username, password } = this.formLogin.value;

    const body = {
      username: username,
      password: password,
      request_token: sessionStorage.getItem('requestToken'),
    };

    const configPost = {
      url: ConstantURI.validateWithLogin,
      params: { api_key: ConstantURI.apiKey },
      body: body,
    };

    // postService es un observable, entonces podemos suscribirnos
    this._apiService.postService(configPost).subscribe((val) => {
      const { request_token } = val;
      sessionStorage.setItem('requestToken', request_token);
    });
  }
}
