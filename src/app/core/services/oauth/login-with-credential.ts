import { Injectable } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/compat/auth";
import { AuthSession } from './auth-session';
import { SetUserData } from "./set-user-data";

@Injectable({providedIn: 'root'})
export class LoginWithCredentials {
  constructor(
    protected authSession: AuthSession,
    protected afAuth: AngularFireAuth,
    protected _setUserData: SetUserData) {}

  handle(email: string, password: string) {
    return this.afAuth.signInWithEmailAndPassword(email, password)
      .then(this.setUserData.bind(this))
      .then(this.setUserLocalStorage.bind(this))
      .catch(this.error.bind(this));
  }

  protected setUserData(result: any) {
    return this._setUserData.handle(result.user);
  }

  protected setUserLocalStorage(user: any) {
    this.authSession.setAuthUser(user);
    return user;
  }

  protected error(error: any) {
    throw error;
  }
}
