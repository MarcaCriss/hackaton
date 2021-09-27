import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { map } from 'rxjs/operators';
import { Bootcamp } from '../models/bootcamp';

@Injectable({
  providedIn: 'root',
})
export class BootcampService {
  constructor(private af: AngularFirestore) {}

  getBootcamps() {
    return this.af
      .collection('bootcamps', (ref) => {
        return ref.limit(3).orderBy('id_empresa', 'desc');
      })
      .snapshotChanges()
      .pipe(
        map((value) => {
          value.map((a) => {
            const data = a.payload.doc.data();
            return data;
          });
        })
      );
  }

  getBootcampsQuery(batch: number, lastKey: number=1) {
    console.log('batch: '+batch+ ' lastkey: '+lastKey)
    return this.af
      .collection('bootcamps', (ref) => {
        return ref.orderBy('population').startAt(lastKey).limit(batch);
      })
      .snapshotChanges()
      .pipe(
        map((value) =>{

          return value.map((a) => {
            const data = a.payload.doc.data();
            return data;
          })
        })
      );
  }

  createBootcamps(bootcamp: Bootcamp) {
      this.af.collection('bootcamps').add({
        id_empresa: bootcamp.name,
        descripcion: bootcamp.descripcion
      })
      .then( data => {  })
      .catch(error => console.log(error));
  }
}
