import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import {FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database-deprecated';


@Injectable({
  providedIn: 'root'
})
export class ClassService {

  constructor(private db: AngularFireDatabase) { }
}
