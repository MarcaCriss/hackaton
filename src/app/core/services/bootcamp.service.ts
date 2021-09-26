import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { map } from 'rxjs/operators';
import { Bootcamp } from '../models/bootcamp';


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

  createBootcamps(bootcamp: Bootcamp) {
      this.af.collection('bootcamps').add({
        id_empresa: bootcamp.name,
        descripcion: bootcamp.descripcion
      })
      .then( data => {  })
      .catch(error => console.log(error));
  }
}
