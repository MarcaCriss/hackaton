import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { map } from "rxjs/operators";
import { Observable } from 'rxjs';
import { AuthSession } from '../services/oauth/auth-session';
@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  ​
   constructor(  private authSession: AuthSession,
    private auth: AngularFireAuth,
    private router: Router) {
   }
  ​
   canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

     return this.auth.authState.pipe(map((user)=>{
      let _user = user || {uid: ''};
      let authState = _user.uid != '';
      if(!authState || !this.authSession.getAuthUser()) {
        this.router.navigate(['']);
        return false;
      }

      return true;
    }));
   }
  ​
  }
