import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class HeadersInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if(localStorage.getItem('token')!==null){
      let myToken:any = localStorage.getItem('token')
      let newReq = request.clone({setHeaders:{token:myToken}})
      return next.handle(newReq);
    }
    else{
      return next.handle(request);
    }
  }
}
