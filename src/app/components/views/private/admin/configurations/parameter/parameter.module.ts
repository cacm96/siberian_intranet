import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../../../../../core/ui/material.module';
import { ParameterRoutingModule } from './parameter-routing.module';
import { ParameterComponent } from './parameter.component';
import { ParametersComponent } from './parameters/parameters.component';

@NgModule({
  declarations:
  [
  	ParameterComponent,
  	ParametersComponent,
  ],
  imports: [
    CommonModule,
    ParameterRoutingModule,
    MaterialModule
  ]
})
export class ParameterModule { }
