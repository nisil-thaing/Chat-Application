import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';

import { CreateUserInput } from '../../models';
import { HTTP_STATUS } from '../../config/http-client.config';

@Injectable()
export class UserService {
  constructor(private _httpClient: HttpClient) {}

  signup(params: CreateUserInput): Observable<any> {
    return this._httpClient.post('/users', params, { observe: 'response' })
      .map((response: HttpResponse<any>) => {
        if (response.status !== HTTP_STATUS.SUCCESS) {
          return Observable.throw('Oops! Something went wrong!');
        }

        return response.body;
      });
  }
}

