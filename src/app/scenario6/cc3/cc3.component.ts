import { Component, OnInit } from '@angular/core';
import { DataserviceService } from 'src/app/dataservice.service';

@Component({
  selector: 'app-cc3',
  templateUrl: './cc3.component.html',
  styleUrls: ['./cc3.component.css']
})
export class Cc3Component implements OnInit {

  public text:string;
  constructor(private dataservice: DataserviceService) { }

  ngOnInit() {
    this.dataservice.subject.subscribe(data=> {

      console.log(data.value);
      this.text=data;
    })
  }

}
