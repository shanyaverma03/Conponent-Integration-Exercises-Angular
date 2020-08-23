import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-compo1',
  templateUrl: './compo1.component.html',
  styleUrls: ['./compo1.component.css']
})
export class Compo1Component implements OnInit {

  public finaltext="";
  constructor() { }

  ngOnInit() {
  }

  assign(value) {

    this.finaltext=value;
  }
}
