import { Component, OnInit } from '@angular/core';

import { Class } from '../models/DataTypes';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  classes : Class[] = [];

  constructor() { }

  ngOnInit() {
    this.classes = [
      {
        classID : "312321",
        className : "CMSC330",
        studyGroupIDS: ["FirstGroup", "Second Group"],
      },

      {
        classID : "432432",
        className : "CMSC216",
        studyGroupIDS: ["Hello Group", "My S Group"]
      },
    ]
  }

}
