import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../../../../core/ui/material.module';
import { DniTypeRoutingModule } from './dni-type-routing.module';
import { DniTypeComponent } from './dni-type.component';
import { DniTypesComponent } from './dni-types/dni-types.component';
import { DniTypeCreateComponent } from './dni-type-create/dni-type-create.component';
import { DniTypeEditComponent } from './dni-type-edit/dni-type-edit.component';
import { DniTypeShowComponent } from './dni-type-show/dni-type-show.component';
import { DniTypeDeleteComponent } from './dni-type-delete/dni-type-delete.component';

@NgModule({
  declarations: [
	DniTypeComponent,
	DniTypesComponent,
	DniTypeCreateComponent,
	DniTypeEditComponent,
	DniTypeShowComponent,
	DniTypeDeleteComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    DniTypeRoutingModule
  ]
})
export class DniTypeModule { }
