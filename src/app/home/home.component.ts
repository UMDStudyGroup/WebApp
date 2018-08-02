import { Component, OnInit } from '@angular/core';
import { ClassData } from '../models/DataTypes';
import { ClassService } from '../services/class/class.service';
import { Observable, of } from 'rxjs'
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from 'angularfire2/firestore';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  classes: Observable<ClassData[]>;
  constructor(private classService: ClassService) {}

  async ngOnInit() {

    try {
      //await this.classService.addStudyGroup('CMSC 120', 'test2');
    } catch (e) {
    }

    this.classes = this.classService.allClasses();
  }



}
