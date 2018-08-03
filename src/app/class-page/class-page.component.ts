import { Component, OnInit } from '@angular/core';
import { StudyGroup } from '../models/DataTypes';
import { StudyGroupService } from '../services/studygroup/study-group.service'
import { TransferService } from '../services/transfer/transfer.service';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from 'angularfire2/firestore';


@Component({
  selector: 'app-class-page',
  templateUrl: './class-page.component.html',
  styleUrls: ['./class-page.component.css']
})
export class ClassPageComponent implements OnInit {
  
  className = this.transferService.getData();      
  
  groups: StudyGroup[];
  constructor(private studyGroupService: StudyGroupService, private transferService: TransferService) { }

  async ngOnInit() {
    this.groups = await this.studyGroupService.getClassStudyGroups(this.className);
    console.log(this.groups);
  }

}
