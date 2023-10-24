import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService<T> {
  // Aqui inyectamos el servicio HttpClient para utilizarlo en este servicio
  constructor(private http: HttpClient) {}

  postService(paramsReq: any): Observable<T> {
    const headers = new HttpHeaders({
      accept: 'application/json',
    });

    const { url, params, body } = paramsReq;
    const options = { headers, params };

    return this.http.post<T>(url, body, options).pipe(
      map((res) => res),
      catchError(this.handerError)
    );
  }

  getService(paramsReq: any): Observable<T> {
    const headers = new HttpHeaders({
      accept: 'application/json',
    });

    const { url, params } = paramsReq;
    const options = { headers, params };

    return this.http.get<T>(url, options).pipe(
      map((res) => res),
      catchError(this.handerError)
    );
  }

  private handerError(err: HttpErrorResponse) {
    console.log(err.error);
    return throwError(() => err);
  }
}
