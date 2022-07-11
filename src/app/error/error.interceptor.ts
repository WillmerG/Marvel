import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import Swal from 'sweetalert2';


@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  constructor() { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        console.log(error);
        if (error?.error?.code) {
          Swal.fire('Error', `Error Code: ${error?.error?.code} Message: ${error?.error?.message}`, 'error');
        } else {
          Swal.fire('Error', `Error Message: ${error?.message}`, 'error');
        }

        return throwError(() => error.error);
      })
    );
  }
}
