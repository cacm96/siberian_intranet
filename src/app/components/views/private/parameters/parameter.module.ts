import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../../../core/ui/material.module';
import { ParameterRoutingModule } from './parameter-routing.module';
import { ParameterComponent } from './parameter.component';


@NgModule({

  declarations: [
    ParameterComponent,
  ],
  imports:[
    CommonModule,
    MaterialModule,
    ParameterRoutingModule
  ],
})
export class ParameterModule { }
