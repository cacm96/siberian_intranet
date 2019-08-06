import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../../../../../core/ui/material.module';
import { VarietyRoutingModule } from './variety-routing.module';
import { VarietyComponent } from './variety.component';
import { VarietysComponent } from './varietys/varietys.component';
import { VarietyCreateComponent } from './variety-create/variety-create.component';
import { VarietyEditComponent } from './variety-edit/variety-edit.component';
import { VarietyShowComponent } from './variety-show/variety-show.component';
import { VarietyDeleteComponent } from './variety-delete/variety-delete.component';

@NgModule({
  declarations: [
	VarietyComponent,
	VarietysComponent,
	VarietyCreateComponent,
	VarietyEditComponent,
	VarietyShowComponent,
	VarietyDeleteComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    VarietyRoutingModule
  ]
})
export class VarietyModule { }
