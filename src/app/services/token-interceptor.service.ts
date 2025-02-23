import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, switchMap } from 'rxjs/operators';
import { AuthService } from './authentication.service';
import { Router } from '@angular/router';

@Injectable()
export class TokenInterceptorService implements HttpInterceptor {
  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const currentUser = this.authService.getCurrentUser();

    // Ajouter le token si disponible
    if (currentUser && currentUser.token) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${currentUser.token}`
        }
      });
    }

    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        // Gestion des erreurs de token
        if (error.status === 401) {
          // Tentative de régénération du token
          return this.authService.regenerateToken().pipe(
            switchMap(user => {
              // Réessayer la requête avec le nouveau token
              const newRequest = request.clone({
                setHeaders: {
                  Authorization: `Bearer ${user.token}`
                }
              });
              return next.handle(newRequest);
            }),
            catchError(regenerateError => {
              // Échec de la régénération, déconnexion forcée
              this.authService.logout();
              this.router.navigate(['/login']);
              return throwError(regenerateError);
            })
          );
        }
        return throwError(error);
      })
    );
  }
}

