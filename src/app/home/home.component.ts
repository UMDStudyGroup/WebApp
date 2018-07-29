import { Component, OnInit } from '@angular/core';
import { Class } from '../models/DataTypes';
import { ClassService } from '../services/class/class.service';
import { Observable, of } from 'rxjs'
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from 'angularfire2/firestore';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  // classes2 : Class[] = [];
  classes: Observable<Class[]>;
  constructor(private classService: ClassService) {}

  ngOnInit() {
    this.classService.addClass('CMSC 120')
    this.classService.addStudyGroup('CMSC 120', 'Anwar')
    // this.classes2 = [
    //   {
    //     className : "CMSC330",
    //     studyGroupIDS: ["FirstGroup", "Second Group"],
    //   },
    //
    //   {
    //     className : "CMSC216",
    //     studyGroupIDS: ["Hello Group", "My S Group"]
    //   },
    // ]
    this.classes = this.classService.allClasses();
  }



}
