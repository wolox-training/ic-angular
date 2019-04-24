import { Injectable, Injector } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';
import { UserService } from './user.service';

@Injectable()
export class TokenInterceptorService implements HttpInterceptor {

  constructor(private injector: Injector) { }

  intercept(req, next) {
    const userService = this.injector.get(UserService);
    const token = userService.getToken();
    if (token) {
      const tokenizedReq = req.clone({
        setHeaders: {
          Authorization: token
        }
      });
      return next.handle(tokenizedReq);
    }
    return next.handle(req);
  }
}
