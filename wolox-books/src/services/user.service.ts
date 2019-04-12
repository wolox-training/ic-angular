import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { APIS } from '@configs/api.configs';
import { environment } from 'environments/environment';
import { UserModelSave } from '@models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  serverBaseUrl: string = environment.serverBaseUrl;

  constructor(private httpClient: HttpClient) { }

  /**
   * @param model User to create
   */
  createUser(user: UserModelSave): Observable<any> {
    const apiRrl = this.prepareUrl(APIS.users.create_user);
    return this.httpClient.post<any>(apiRrl, user, { observe: 'response' }).pipe(
      map((response) => response)
    );
  }

  private prepareUrl(keyService, urlSearchParams?: URLSearchParams) {
    return this.serverBaseUrl + keyService + (urlSearchParams ? '?' + urlSearchParams : '');
  }
}
