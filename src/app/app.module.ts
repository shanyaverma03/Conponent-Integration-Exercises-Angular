import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { T1Component } from 'src/app/scenario1/t1/t1.component';
import { T2Component } from 'src/app/scenario2/t2/t2.component';
import {FormsModule} from '@angular/forms';

import { C1Component } from 'src/app/scenario3/c1/c1.component';
import { C2Component } from 'src/app/scenario3/c2/c2.component';
import { Comp1Component } from 'src/app/scenario4/comp1/comp1.component';
import { Comp2Component } from 'src/app/scenario4/comp2/comp2.component';

import { Compo1Component } from 'src/app/scenario5/compo1/compo1.component';
import { Compo2Component } from 'src/app/scenario5/compo2/compo2.component';
import { Compo3Component } from 'src/app/scenario5/compo3/compo3.component';

import { Cc1Component } from 'src/app/scenario6/cc1/cc1.component';
import { Cc2Component } from 'src/app/scenario6/cc2/cc2.component';
import { Cc3Component } from 'src/app/scenario6/cc3/cc3.component';
import { DataserviceService } from 'src/app/dataservice.service';


@NgModule({
  declarations: [
    AppComponent, T1Component, T2Component, C1Component, C2Component, Comp1Component, Comp2Component, 
    Compo1Component, Compo2Component, Compo3Component, Cc1Component,
    Cc2Component, Cc3Component
    
  ],
  imports: [
    BrowserModule,
    FormsModule
    
    
  ],
  providers: [DataserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
