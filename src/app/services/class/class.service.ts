import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Class } from '../../models/DataTypes';
import { Observable, of } from 'rxjs'
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ClassService {

  classesRef: AngularFirestoreCollection<Class>;
  constructor(private afs: AngularFirestore) {
    this.classesRef = afs.collection<Class>('classes');
   }

  addClass(name: string): void {
    name = name.toLowerCase();
    this.afs.collection('classes', ref => ref.where('name', '==', name)).snapshotChanges().subscribe(res => {
      if (res.length > 0) {
        return false;
      } else {
        const id = this.afs.createId();
        const temp : Class = { ID:id, name:name };
        this.classesRef.doc(id).set(temp);
      }
    });
  }

  allClasses(): Observable<Class[]> {
    return this.classesRef.valueChanges();
  }

  addStudyGroup(className: string, studyGroupName: string): void {
    // if (class) {
    //
    // } else {
    //   addClass(className);
    //   addStudyGroup(className, studyGroupName);
    // }
    //
    // return false;
  }

}
