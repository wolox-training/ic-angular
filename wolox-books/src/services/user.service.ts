import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { APIS } from '@configs/api.configs';
import { environment } from 'environments/environment';
import { UserModelSave, LoginModel } from '@models/user.model';
import { UnauthResponse } from '@models/unauth-response.model';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  serverBaseUrl: string = environment.serverBaseUrl;

  constructor(private httpClient: HttpClient, private localStorageService: LocalStorageService) { }

  createUser(user: UserModelSave): Observable<HttpResponse<UnauthResponse>> {
    const apiRrl = this.prepareUrl(APIS.users.create_user);
    return this.httpClient.post<UnauthResponse>(apiRrl, user, { observe: 'response' });
  }

  login(user: LoginModel): Observable<HttpResponse<UnauthResponse>> {
    const apiRrl = this.prepareUrl(APIS.users.login);
    return this.httpClient.post<UnauthResponse>(apiRrl, user, { observe: 'response' });
  }

  isLogged() {
    return (this.localStorageService.getValue(this.localStorageService.SESSION_TOKEN)) ? true : false;
  }

  private prepareUrl(keyService, urlSearchParams?: URLSearchParams) {
    return this.serverBaseUrl + keyService + (urlSearchParams ? '?' + urlSearchParams : '');
  }
}
