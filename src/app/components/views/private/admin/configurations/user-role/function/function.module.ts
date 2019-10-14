import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../../../../../../core/ui/material.module';
import { FunctionRoutingModule } from './function-routing.module';
import { FunctionComponent } from './function.component';
import { FunctionsComponent } from './functions/functions.component';
import { FunctionCreateComponent } from './function-create/function-create.component';
import { FunctionEditComponent } from './function-edit/function-edit.component';
import { FunctionShowComponent } from './function-show/function-show.component';
import { FunctionDeleteComponent } from './function-delete/function-delete.component';

@NgModule({
  declarations: [
	FunctionComponent,
	FunctionsComponent,
	FunctionCreateComponent,
	FunctionEditComponent,
	FunctionShowComponent,
	FunctionDeleteComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FunctionRoutingModule
  ]
})
export class FunctionModule { }
