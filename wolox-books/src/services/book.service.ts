import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { APIS } from '@configs/api.configs';
import { environment } from 'environments/environment';
import { BookResponse } from '@models/book.model';

@Injectable()
export class BookService {
  serverBaseUrl: string = environment.serverBaseUrl;

  constructor(private httpClient: HttpClient) { }

  getBook(id): Observable<HttpResponse<BookResponse[]>> {
    const apiUrl = this.prepareUrl(APIS.books.list);
    return this.httpClient.get<BookResponse[]>(`${apiUrl}/${id}`, { observe: 'response' });
  }

  getBooks(params?): Observable<HttpResponse<BookResponse[]>> {
    const apiUrl = this.prepareUrl(APIS.books.list);
    return this.httpClient.get<BookResponse[]>(apiUrl, { observe: 'response' });
  }

  private prepareUrl(keyService, urlSearchParams?: URLSearchParams) {
    return this.serverBaseUrl + keyService + (urlSearchParams ? '?' + urlSearchParams : '');
  }
}
