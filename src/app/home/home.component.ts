import { Component, OnInit, TemplateRef } from '@angular/core';
import { ClassData } from '../models/DataTypes';
import { ClassService } from '../services/class/class.service';
import { TransferService } from '../services/transfer/transfer.service';
import { Observable, of } from 'rxjs';
import { Router } from '../../../node_modules/@angular/router';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from 'angularfire2/firestore'
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { ModalModule } from 'ngx-bootstrap/modal';
import { BsModalService } from 'ngx-bootstrap/modal';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  selected: string;
  classNames: string[] = [];

  classes: ClassData[] = [];
  constructor(private classService: ClassService, private transferService: TransferService, private router: Router) {}

  ngOnInit() {
    this.classService.allClasses().subscribe((data) => {
      this.classes = data;
      this.classes.forEach((val) => {
        this.classNames.push(val.name);
      });
    });
  }

  goClassPage(val: string) {
    if (this.classNames.indexOf(val) !== -1) {
      this.router.navigate(['/classpage', val]);
    }
  }

}
