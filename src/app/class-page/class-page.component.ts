import { Component, OnInit, TemplateRef } from '@angular/core';
import { StudyGroup } from '../models/DataTypes';
import { StudyGroupService } from '../services/studygroup/study-group.service';
import { TransferService } from '../services/transfer/transfer.service';
import { ActivatedRoute } from '@angular/router';
import { BsModalService } from 'ngx-bootstrap/modal';
import { Observable, of } from 'rxjs';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { ModalModule } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-class-page',
  templateUrl: './class-page.component.html',
  styleUrls: ['./class-page.component.css']
})
export class ClassPageComponent implements OnInit {
  modalRef: BsModalRef;
  maxSize = 5;
  bigTotalItems = 175;
  bigCurrentPage = 1;
  // className: string;

  // className = this.transferService.getData();
  className = 'CMSC 120';

  groups: StudyGroup[];
  constructor(private studyGroupService: StudyGroupService, private transferService: TransferService,
    private route: ActivatedRoute, private modalService: BsModalService) { }

  async ngOnInit() {
    this.route.params.subscribe(async params => {
      // this.className = params['classname'];
      this.groups = await this.studyGroupService.getClassStudyGroups(this.className);
      console.log(this.groups);
    });
  }
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
     console.log("here");
  }

}
