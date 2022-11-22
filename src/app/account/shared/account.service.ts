import { environment } from './../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private http: HttpClient) { }

  async login(user: any) {
    const result = await this.http.post<any>(`${environment.api}/auth/signin`, user).toPromise();
    if (result && result.accessToken) {
      window.localStorage.setItem('token', result.accessToken);
      return true;
    }
    console.log(result);
    return false;
  }

  async createAccount(account: any) {
    const result = await this.http.post<any>(`${environment.api}/auth/signup`, account).toPromise();
    console.log(result)
    return result;
  }

  getAuthorizationToken() {
    const token = window.localStorage.getItem('token');
    return token;
  }

  getTokenExpirationDate(token: string): Date {
    let decoded: any = jwt_decode?(token):  '';

    if (decoded.exp === undefined) {
       
    }

    const date = new Date(0);
    date.setUTCSeconds(decoded.exp);
    return date;
  }


  isTokenExpired(token?: string): boolean {
    if (!token) {
      return true;
    }

    const date = this.getTokenExpirationDate(token);
    if (date === undefined) {
      return false;
    }

    return !(date.valueOf() > new Date().valueOf());
  }

  isUserLoggedIn() {
    const token = this.getAuthorizationToken();
    if (!token) {
      return false;
    } else if (this.isTokenExpired(token)) {
      return false;
    }

    return true;
  }
}
