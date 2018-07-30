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
  classRef: AngularFirestoreDocument<Class>;
  oneClass: Observable<Class>;
  constructor(private afs: AngularFirestore) {
    this.classesRef = afs.collection<Class>('classes');
   }

  addClass(name: string): void {
    name = name.toLowerCase().trim();
    this.afs.collection('classes', ref => ref.where('name', '==', name)).snapshotChanges().subscribe(res => {
      //console.log(res)
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
    className = className.toLowerCase().trim();

    var sgID = 'Anwar';
    this.afs.collection('classes', ref => ref.where('name', '==', className)).snapshotChanges().subscribe(res => {
      if(res.length > 0) {
        const id = res[0].payload.doc.id;
        //create studygroup and then get its id and use here instead of sgID
        this.afs.doc<Class>('classes/'+id).update({
          ['studyGroupIDs.' + sgID] : true
        });
      }
    });
  }

}
