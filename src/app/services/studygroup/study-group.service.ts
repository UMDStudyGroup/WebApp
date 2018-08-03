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

  async createOrFindStudyGroup(studyGroupName: string, ID: string): Promise<StudyGroup[]> {
    var studygroup = await this.afs.collection<StudyGroup>('studygroups', ref => ref.where('name', '==', studyGroupName)).valueChanges()
    .pipe(
      first()
    ).toPromise();

    if (studygroup.length == 0) {
      this.create(studyGroupName, ID)

      studygroup = await this.afs.collection<StudyGroup>('studygroups', ref => ref.where('studyGroupName', '==', studyGroupName)).valueChanges()
      .pipe(
        first()
      ).toPromise();
    }

      return studygroup

  }

  create = function(studyGroupName, ID) {
    const id = this.afs.createId();
    const temp : StudyGroup = { ID:id, name:studyGroupName, ClassID:ID };
    return this.studyGroupRef.doc(id).set(temp);
  }

  async createStudyGroup(studyGroupName: string, className: string): Promise<void> {

    const oneClass = await this.afs.collection<StudyGroup>('classes', ref => ref.where('name', '==', className)).valueChanges()
    .pipe(
      first()
    ).toPromise()

    return this.create(studyGroupName, oneClass[0].ID);
  }

  async getClassStudyGroups(className: string): Promise<StudyGroup[]> {
    
    const oneClass = await this.afs.collection<ClassData>('classes', ref => ref.where('name', '==', className)).valueChanges()
    .pipe(
      first()
    ).toPromise()

    console.log(oneClass);
    
    const studygroups = await this.afs.collection<StudyGroup>('studygroups', ref => ref.where('ClassID', '==', oneClass[0].ID)).valueChanges()
    .pipe(
      first()   //first() returns first instance of observable and unsubscribes so this may be an issue to keep track of real-time studygroups
    ).toPromise()

    return studygroups
  }


}
