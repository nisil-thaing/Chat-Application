import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { AuthenticateInput } from '../../models/user';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { User } from '../../models';
import { HTTP_STATUS } from '../../config/http-client.config';

@Injectable()
export class AuthenticationService {
  constructor(private _httpClient: HttpClient) { }

  login(params: AuthenticateInput): Observable<User> {
    return this._httpClient.post('/users/login', params, { observe: 'response' })
      .map((response: HttpResponse<any>) => {
        if (response.status !== HTTP_STATUS.SUCCESS) {
          return Observable.throw('Oops! Something went wrong!');
        }

        const user = response.body;

        if (user && user['token']) {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            localStorage.setItem('currentUser', JSON.stringify(user));
        }

        return user;
      });
  }
}

