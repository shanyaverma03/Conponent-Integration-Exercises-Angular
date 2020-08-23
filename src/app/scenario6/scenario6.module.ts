import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Cc1Component } from './cc1/cc1.component';
import { Cc2Component } from './cc2/cc2.component';
import { Cc3Component } from './cc3/cc3.component';



@NgModule({
  declarations: [Cc1Component, Cc2Component, Cc3Component],
  imports: [
    CommonModule
  ]
})
export class Scenario6Module { }
