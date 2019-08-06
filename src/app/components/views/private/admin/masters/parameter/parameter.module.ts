import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../../../../../core/ui/material.module';
import { ParameterRoutingModule } from './parameter-routing.module';
import { ParameterComponent } from './parameter.component';
import { ParametersComponent } from './parameters/parameters.component';
import { ParameterCreateComponent } from './parameter-create/parameter-create.component';
import { ParameterEditComponent } from './parameter-edit/parameter-edit.component';
import { ParameterShowComponent } from './parameter-show/parameter-show.component';
import { ParameterDeleteComponent } from './parameter-delete/parameter-delete.component';

@NgModule({
  declarations: [
	ParameterComponent,
	ParametersComponent,
	ParameterCreateComponent,
	ParameterEditComponent,
	ParameterShowComponent,
	ParameterDeleteComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ParameterRoutingModule
  ]
})
export class ParameterModule { }
