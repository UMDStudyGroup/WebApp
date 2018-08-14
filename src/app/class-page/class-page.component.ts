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
  maxSize = 4;
  bigTotalItems: number;
  modalRef: BsModalRef;
  bigCurrentPage = 1;
  numItemsPerPage = 5;
  // className: string;

  className = 'CMSC 120';
  allGroups: StudyGroup[];
  currGroups: StudyGroup[];

  groups: StudyGroup[];
  constructor(private studyGroupService: StudyGroupService, private route: ActivatedRoute, private modalService: BsModalService) { }


  async ngOnInit() {
    this.route.params.subscribe(async params => {
      // this.className = params['classname'];
      this.allGroups = await this.studyGroupService.getClassStudyGroups(this.className);
      this.bigTotalItems = this.numOfPages(this.allGroups.length);
      this.currGroups = this.pageGroups(1, this.numItemsPerPage);
    });
  }
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
     console.log("here");
  }

  numOfPages(len: number): number {
    if (len % this.numItemsPerPage === 0) {
      return len / this.numItemsPerPage;
    } else {
      return (len / this.numItemsPerPage) + 1;
    }
  }

  pageGroups(page_num: number, numItems: number): StudyGroup[] {
    --page_num;
    return this.allGroups.slice(page_num * numItems, (page_num + 1) * numItems);
  }

  pageChanged(event) {
    this.currGroups = this.pageGroups(event.page, event.itemsPerPage);
  }

}
