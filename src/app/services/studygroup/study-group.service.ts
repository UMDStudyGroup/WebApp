import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from 'angularfire2/firestore';
import { StudyGroup, ClassData } from '../../models/DataTypes';
import { Observable, of } from 'rxjs'
import { map, first } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class StudyGroupService {

  studyGroupRef: AngularFirestoreCollection<ClassData>;

  constructor(private afs: AngularFirestore) {
    this.studyGroupRef = afs.collection<StudyGroup>('studygroups');
  }

  async createOrFindStudyGroup(studyGroupName: string): Promise<StudyGroup[]> {
    var studygroup = await this.afs.collection<StudyGroup>('studygroups', ref => ref.where('name', '==', studyGroupName)).valueChanges()
    .pipe(
      first()
    ).toPromise();

    if (studygroup.length == 0) {
      const id = this.afs.createId();
      const temp : StudyGroup = { ID:id, name:studyGroupName };
      this.studyGroupRef.doc(id).set(temp);

      studygroup = await this.afs.collection<StudyGroup>('studygroups', ref => ref.where('ID', '==', id)).valueChanges().pipe(
        first()
      ).toPromise();
    }

      return studygroup

  }

}
