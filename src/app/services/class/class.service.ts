import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from 'angularfire2/firestore';
import { ClassData } from '../../models/DataTypes';
import { Observable, of } from 'rxjs';
import { map, first } from 'rxjs/operators';
import { StudyGroupService } from '../studygroup/study-group.service';

@Injectable({
  providedIn: 'root'
})
export class ClassService {

  classesRef: AngularFirestoreCollection<ClassData>;
  classRef: AngularFirestoreDocument<ClassData>;

  constructor(private afs: AngularFirestore, private studyGroupService: StudyGroupService) {
    this.classesRef = afs.collection<ClassData>('classes');
   }


  addClass(name: string): void {
    name = name.toUpperCase().trim();

    this.afs.collection('classes', ref => ref.where('name', '==', name)).snapshotChanges().subscribe(res => {
      if (res.length > 0) {
        return false;
      } else {
        const id = this.afs.createId();
        const temp: ClassData = { ID: id, name: name };
        this.classesRef.doc(id).set(temp);
      }
    });
  }

  allClasses(): Observable<ClassData[]> {
    return this.classesRef.valueChanges();
  }

  async addStudyGroup(className: string, studyGroupName: string): Promise<void> {
    className = className.toUpperCase().trim();

    const oneClass = await this.afs.collection<ClassData>('classes', ref => ref.where('name', '==', className)).valueChanges().pipe(
      first()
    ).toPromise();

    const studygroup = await this.studyGroupService.createOrFindStudyGroup(studyGroupName, oneClass[0].ID);

    return this.afs.doc<ClassData>('classes/' + oneClass[0].ID).update({
      ['studyGroupIDs.' + studygroup[0].ID] : true
    });
  }

  getClassID

}
