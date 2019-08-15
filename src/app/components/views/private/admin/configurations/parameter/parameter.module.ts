import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParameterComponent } from './parameter.component';
import { ParametersComponent } from './parameters/parameters.component';

@NgModule({
  declarations: [ParameterComponent, ParametersComponent],
  imports: [
    CommonModule
  ]
})
export class ParameterModule { }
