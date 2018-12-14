import { Component, OnInit } from '@angular/core';
import { MiliSecond } from '../mili-second';

@Component({
  selector: 'app-mili-second-to-date',
  templateUrl: './mili-second-to-date.component.html',
  styleUrls: ['./mili-second-to-date.component.css']
})
export class MiliSecondToDateComponent implements OnInit {

  constructor() { }
  mSecond:MiliSecond= { miliSecond : 1324339200000};  
  ngOnInit() {
  }

}
