import { Component, OnInit } from '@angular/core';
import { ClassService } from '../services/class/class.service'
import { Observable, of } from 'rxjs'
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Class } from '../models/DataTypes';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.css']
})
export class HelpComponent implements OnInit {

  constructor() {}

  ngOnInit() {

  }

}
