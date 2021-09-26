import { Injectable, NgZone } from "@angular/core";
import { Router } from "@angular/router";
import { FirebaseAuthUser } from "./firebase-auth-user";

@Injectable({providedIn: 'root'})
export class SetUserData {
  constructor(
    protected ngZone: NgZone,
    protected router: Router) {}

  handle(user: any) {

    const userData: FirebaseAuthUser = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL,
      emailVerified: user.emailVerified
    }
    return userData;
  }
}
