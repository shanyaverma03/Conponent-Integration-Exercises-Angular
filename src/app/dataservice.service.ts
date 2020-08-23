import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class DataserviceService {

  public subject= new BehaviorSubject<any>("shanya");
  constructor() { }

  sendDataToSubject(value) {
    this.subject.next(value);
  }
}
