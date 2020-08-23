import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-compo3',
  templateUrl: './compo3.component.html',
  styleUrls: ['./compo3.component.css']
})
export class Compo3Component implements OnInit {

  @Output()
  public textToParent= new EventEmitter();
  public childText="";
  constructor() { }

  ngOnInit() {
  }

  sendDataToParent(value){

    this.childText=value;
    this.textToParent.emit(this.childText);
  }

}
