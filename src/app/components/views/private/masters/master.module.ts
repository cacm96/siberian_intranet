import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../../../core/ui/material.module';
import { MasterRoutingModule } from './master-routing.module';
import { MasterComponent } from './master.component';

@NgModule({
  declarations: [
    MasterComponent,
  ],
  imports:[
  	CommonModule,
    MaterialModule,
    MasterRoutingModule
  ],
})
export class MasterModule { }
