import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';
import { environment } from 'environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  serverBaseUrl: string = environment.serverBaseUrl;

  constructor(private httpClient: HttpClient) { }

  /**
   * @param endpoint API's endpoint.
   * @param urlSearchParams API's URL params.
   */
  get<T>(endpoint: string, urlSearchParams: URLSearchParams = null): Observable<T> {
    const apiRrl = this.prepareUrl(endpoint, urlSearchParams);
    const headers = this.getHeader();
    return this.httpClient.get<T>(apiRrl, { headers }).pipe(
      map((rs: T) => rs as T));
  }

  /**
   * @param endpoint API's endpoint.
   * @param data Data to save.
   */
  post<T>(endpoint: string, data: any = null): Observable<T> {
    const apiRrl = this.prepareUrl(endpoint);
    const headers = this.getHeader();
    return this.httpClient.post(apiRrl, data, { headers }).pipe(
      map((rs: T) => rs as T));
  }

  /**
   * @param endpoint API's endpoint.
   * @param data Data to save.
   */
  put<T>(endpoint: string, data: any = null): Observable<T> {
    const apiRrl = this.prepareUrl(endpoint);
    const headers = this.getHeader();
    return this.httpClient.put(apiRrl, data, { headers }).pipe(
      map((rs: T) => rs as T));
  }

  private prepareUrl(keyService, urlSearchParams?: URLSearchParams) {
    return this.serverBaseUrl + keyService + (urlSearchParams ? '?' + urlSearchParams : '');
  }

  private getHeader(): HttpHeaders {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    });
    return headers;
  }
}
