import { Component, OnInit } from '@angular/core';
import { Class } from '../models/DataTypes';
import { ClassService } from '../services/class/class.service';
import { Observable} from 'rxjs/Rx'
import { Subject } from 'rxjs/Subject'
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from 'angularfire2/firestore';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

    searchterm: string;

    startAt = new Subject();
    endAt = new Subject();

    classes;
    allClasses;

    startobs = this.startAt.asObservable();
    endobs = this.endAt.asObservable();

  // classes2 : Class[] = [];
  constructor(private afs: AngularFirestore) {}

ngOnInit() {
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

    this.getAllClasses().subscribe((classes) => {
      this.allClasses = classes;
    })

    Observable.combineLatest(this.startobs, this.endobs).subscribe((value) => {
      this.getClass(value[0], value[1]).subscribe((classes) => {
        this.classes = classes;
      })
    })
  }

  search($event) {
    let q = $event.target.value;
    if (q != '') {
      this.startAt.next(q);
      this.endAt.next(q + "\uf8ff");
    }
    else {
      this.classes = this.allClasses;
    }
  }

  getClass(start, end) {
   return this.afs.collection('classes', ref => ref.limit(4).orderBy('name').startAt(start).endAt(end)).valueChanges();
  }

  getAllClasses() {
   return this.afs.collection('classes', ref => ref.orderBy('name')).valueChanges();
  }
  }
