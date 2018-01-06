import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { getApiUrl } from '../config/http-client.config';

function toUrl(url: string): string {
  if (url.charAt(0) === '/') {
    return getApiUrl() + url;
  }
  return getApiUrl() + '/' + url;
}

@Injectable()
export class JWTInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    req = req.clone({
      setHeaders: {
        'Content-Type': 'application/json'
      }
    });

    // create authorization header with jwt token
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));

    if (currentUser && currentUser.token) {
      req = req.clone({
        setHeaders: {
          'X-Auth-Token': currentUser.token
        }
      });
    }

    if (req.url && req.url.indexOf('http') < 0 && req.url.lastIndexOf('.json') === -1) {
      req = req.clone({ url: toUrl(req.url) });
    }

    return next.handle(req);
  }
}
