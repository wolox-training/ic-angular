import { Injectable } from '@angular/core';
import { ApiService } from '@services/api.service';
import { APIS } from '@configs/api.configs';
import { Observable } from 'rxjs';
import { User } from 'models/user.model';
import Utils from '@commons/utils';
import { ServiceResponseModel } from '@models/service-response.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private service: ApiService) { }

  /**
   * @param model User to create
   */
  createUser(model: User): Observable<ServiceResponseModel<any>> {
    return this.service.post<ServiceResponseModel<any>>(APIS.users.create_user, Utils.getPropsSnakeFromCamel(model));
  }
}
