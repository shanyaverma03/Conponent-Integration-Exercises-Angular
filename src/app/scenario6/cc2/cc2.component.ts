import { Component, OnInit } from '@angular/core';
import { DataserviceService } from 'src/app/dataservice.service';

@Component({
  selector: 'app-cc2',
  templateUrl: './cc2.component.html',
  styleUrls: ['./cc2.component.css']
})
export class Cc2Component implements OnInit {

  constructor(private dataService: DataserviceService) { }

  ngOnInit() {
  }

  senddata(value) {
    this.dataService.sendDataToSubject(value);
  }

}
