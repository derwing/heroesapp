import { environment } from './../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Auth } from '../interfaces/auth.interface';
import { tap, Observable, map, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseURL: string = environment.baseURL;
  private _account: Auth | undefined;

  get accountAuthenticated() {
    return { ...this._account }
  }

  constructor(private http: HttpClient) { }

  verifieAuthentication(): Observable<boolean> {
    if (!localStorage.getItem('id')) {
      return of(false);
    }

    return this.http.get<Auth>(`${this.baseURL}/usuarios/1`).pipe(
      map(auth => {
        console.log('map', auth);
        this._account = auth;
        return true;
      })
    );
  }

  login() {
    return this.http.get<Auth>(`${this.baseURL}/usuarios/1`)
      .pipe(
        tap(auth => this._account = auth),
        tap(auth => localStorage.setItem('id', auth.id))
      );
  }

  logout() {
    this._account = undefined;
  }

}
