import { ResponseObject } from './../../models/responseObject';
import { Injectable } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/compat/auth";
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { User } from '../../models/User';

@Injectable({providedIn: 'root'})
export class RegisterService {
  constructor(
    private firestore: AngularFirestore,
    protected afAuth: AngularFireAuth,
    ) {}

    register(user: User){
      return new Promise<any>(resolve =>{
        this.afAuth.createUserWithEmailAndPassword(user.email, user.password)
          .then((authResponse: any) => {

              const payload = {
                ...user,
                authUid: authResponse.user.uid
              }

              this.firestore
                  .collection("users")
                  .add(payload)
                  .then((res: any) => {
                    const response: ResponseObject = {
                      success: true,
                      payload: res
                    };
                    return resolve(response);
                  })
                  .catch((error: any) => {
                    const response: ResponseObject = {
                      success: false,
                      payload: error
                    };
                    return resolve(response);
                  })
          })
          .catch((error: any) => {
            const response: ResponseObject = {
              success: false,
              payload: error
            };
            return resolve(response);
          })
    });
  }
}
