import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../../../../../core/ui/material.module';
import { ParameterRoutingModule } from './parameter-routing.module';
import { ParameterComponent } from './parameter.component';
import { ParametersComponent } from './parameters/parameters.component';
import { ParameterClientComponent } from './parameter-client/parameter-client.component';

@NgModule({
  declarations:
  [
  	ParameterComponent,
  	ParametersComponent,
    ParameterClientComponent,
  ],
  imports: [
    CommonModule,
    ParameterRoutingModule,
    MaterialModule
  ]
})
export class ParameterModule { }
