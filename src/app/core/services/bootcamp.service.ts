import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class BootcampService {

  constructor(private af: AngularFirestore ) { }

  getBootcamps() {
    return this.af.collection('bootcamps').snapshotChanges().pipe(
      map((value) => value.map((a) => {
        const data = a.payload.doc.data();
        return data;
      }))
    );
  }
}
