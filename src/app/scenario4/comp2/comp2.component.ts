import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.css']
})
export class Comp2Component implements OnInit {

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
