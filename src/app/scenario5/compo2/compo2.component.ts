import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-compo2',
  templateUrl: './compo2.component.html',
  styleUrls: ['./compo2.component.css']
})
export class Compo2Component implements OnInit {

  @Output()
  public textToComp1= new EventEmitter();
  public text="";
  
  constructor() { }

  ngOnInit() {
  }


  sendDataToComp1(value) {
    this.text=value;
    this.textToComp1.emit(this.text);

  }
}

