// auth.interceptor.ts
/*import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = localStorage.getItem('access_token');  
    console.log('Token in interceptor:', token); // Debugging log

    let clonedReq = req;

    if (token) {
      console.log('Cloning request with token');
      clonedReq = req.clone({
        headers: req.headers.set('Authorization', `Bearer ${token}`)
      });
    } else {
      console.log('No token found');
    }

    return next.handle(clonedReq).pipe(
      catchError((error) => {
        console.error('HTTP Error:', error);
        throw error;
      })
    );
  }
}
*/
import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = localStorage.getItem('access_token');  
    console.log('Token in interceptor:', token);

    let clonedReq = req;

    if (token) {
      console.log('Cloning request with token');
      clonedReq = req.clone({
        headers: req.headers.set('Authorization', `Bearer ${token}`)
      });
    } else {
      console.log('No token found');
    }

    return next.handle(clonedReq).pipe(
      catchError((error) => {
        console.error('HTTP Error:', error);
        throw error;
      })
    );
  }
}
