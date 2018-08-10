import { Component, OnInit } from '@angular/core';
import { StudyGroup } from '../models/DataTypes';
import { StudyGroupService } from '../services/studygroup/study-group.service';
import { TransferService } from '../services/transfer/transfer.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-class-page',
  templateUrl: './class-page.component.html',
  styleUrls: ['./class-page.component.css']
})
export class ClassPageComponent implements OnInit {
  maxSize = 5;
  bigTotalItems = 175;
  bigCurrentPage = 1;
  // className: string;

  // className = this.transferService.getData();
  className = 'CMSC 120';

  groups: StudyGroup[];
  constructor(private studyGroupService: StudyGroupService, private transferService: TransferService,
    private route: ActivatedRoute) { }

  async ngOnInit() {
    this.route.params.subscribe(async params => {
      // this.className = params['classname'];
      this.groups = await this.studyGroupService.getClassStudyGroups(this.className);
      console.log(this.groups);
    });
  }

}
