import { HttpErrorResponse } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { ServiceResponseModel } from '@models/service-response.model';

export default class Utils {
  /**
   * Returns an object that contains properties with the name of type `SnakeCase` from an object with properties of the `CamelCase` type.
   * @param any Object that contains properties of the `CamelCase` type.
   */
  static getPropsSnakeFromCamel(object: any) {
    const snakeObject = {};
    for (const key in object) {
      if (object.hasOwnProperty(key)) {
        const element = snakeObject[camelToSnake(key)] = object[key];
        if (typeof (element) === 'object' && element) {
          snakeObject[camelToSnake(key)] = this.getPropsSnakeFromCamel(element);
        }
      }
    }
    return snakeObject;
  }

  /**
   * @param observable Service to call.
   * @param handleSuccessCallback Callback function that handle a succesful response.
   * @param handleErrorCallback (Optional) Callback function that handle a error response.
   */
  static callService<T>(
    observable: Observable<ServiceResponseModel<T>>,
    handleSuccessCallback: (t: ServiceResponseModel<T>) => void,
    handleErrorCallback?: (r: any) => void
  ) {
    observable.subscribe(
      response => {
        if (handleSuccessCallback) {
          if (response.status) {
            handleSuccessCallback(response);
          } else {
            if (handleErrorCallback) {
              handleErrorCallback(response);
            }
          }
        }
      },
      error => {
        if (handleErrorCallback) {
          handleErrorCallback(error);
        } else {
          handleError(error);
        }
      }
    );
  }
}

function handleError(error: HttpErrorResponse) {
  if (error.error instanceof ErrorEvent) {
    console.error('An error occurred:', error.error.message);
  } else {
    console.error(
      `Backend returned code ${error.status}, ` +
      `body was: ${ JSON.stringify(error.error)}`);
  }
  // return an observable with a user-facing error message
  return throwError(
    'Something bad happened; please try again later.');
};

/**
 * Returns a string `SnakeCase` from a string `CamelCase`.
 * @param string string `CamelCase`.
 */
function camelToSnake(str: string) {
  return str.replace(/([a-z])([A-Z])/g, '$1_$2').toLowerCase();
}
