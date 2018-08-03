import { Component, OnInit } from '@angular/core';
import { StudyGroup } from '../models/DataTypes';
import { StudyGroupService } from '../services/studygroup/study-group.service'
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from 'angularfire2/firestore';


@Component({
  selector: 'app-class-page',
  templateUrl: './class-page.component.html',
  styleUrls: ['./class-page.component.css']
})
export class ClassPageComponent implements OnInit {

  groups: StudyGroup[]
  constructor(private studyGroupService: StudyGroupService) { }

  async ngOnInit() {
    this.groups = await this.studyGroupService.getClassStudyGroups('CMSC 120');
    console.log(this.groups);
  }

}
