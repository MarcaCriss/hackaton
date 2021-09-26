import { Injectable } from '@angular/core';
import { FirebaseAuthUser } from './firebase-auth-user';

@Injectable({ providedIn: 'root' })
export class AuthSession {
  private static AUTH_USER = 'AUTH_USER';
  private static REMEMBER_ME = 'REMEMBER_ME';

  constructor() {}

  setAuthUser(user: FirebaseAuthUser) {
    localStorage.setItem(AuthSession.AUTH_USER, JSON.stringify(user));
  }

  getAuthUser() {
    let encode: any = localStorage.getItem(AuthSession.AUTH_USER);
    let decode = JSON.parse(encode);
    return decode;
  }

  cleanAuthUser() {
    localStorage.removeItem(AuthSession.AUTH_USER);
  }

  setRemembeMe(value: any) {
    localStorage.setItem(AuthSession.REMEMBER_ME, value);
  }

  getRemembeMe() {
    let encode: any = localStorage.getItem(AuthSession.REMEMBER_ME);
    let decode = JSON.parse(encode);
    return decode;
  }
}
