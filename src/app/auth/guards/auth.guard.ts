import { AuthService } from './../services/auth.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, RouterStateSnapshot, UrlSegment, Router } from '@angular/router';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanLoad {


  constructor(
    private AuthService: AuthService,
    private router: Router
  ) {

  }



  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    return this.AuthService.verifieAuthentication()
      .pipe(
        tap(isAuthenticated => {
          if (!isAuthenticated) {
            this.router.navigate(['/auth/login']);
          }
        })
      );

    // if (this.AuthService.accountAuthenticated.id) {
    //   return true;
    // }

    // console.log('block by canActive');

    // return false;
  }

  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean> | boolean {

    return this.AuthService.verifieAuthentication().pipe(
      tap(isAuthenticated => {
        if (!isAuthenticated) {
          this.router.navigate(['/auth/login']);
        }
      })
    );

    //   if (this.AuthService.accountAuthenticated.id) {
    //     return true;
    //   }

    //   console.log('block by canLoad');
    //   return false;
  }
}
