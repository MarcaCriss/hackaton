import { ResponseObject } from './../../models/responseObject';
import { Injectable } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/compat/auth";
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { User } from '../../models/user';

@Injectable({providedIn: 'root'})
export class RegisterService {
  constructor(
    private firestore: AngularFirestore,
    protected afAuth: AngularFireAuth,
    ) {}

    register(user: User){
      return new Promise<any>(async resolve =>{
        try{
          const responseAuth = await this.afAuth.createUserWithEmailAndPassword(user.email, (user.password || ''))

          const userAux = { ...user };
          delete userAux.password;

          await this.firestore
            .collection("users")
            .add({
              ...userAux,
              authUid: responseAuth.user?.uid
            });

          const response: ResponseObject = {
            success: true
          };

          return resolve(response);

        }catch(error){
          const response: ResponseObject = {
            success: false,
            payload: error
          };
          return resolve(response);
        }
    });
  }
}
