import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../../../../core/ui/material.module';
import { BitacoraTypeRoutingModule } from './bitacora-type-routing.module';
import { BitacoraTypeComponent } from './bitacora-type.component';
import { BitacoraTypesComponent } from './bitacora-types/bitacora-types.component';
import { BitacoraTypeCreateComponent } from './bitacora-type-create/bitacora-type-create.component';
import { BitacoraTypeEditComponent } from './bitacora-type-edit/bitacora-type-edit.component';
import { BitacoraTypeShowComponent } from './bitacora-type-show/bitacora-type-show.component';
import { BitacoraTypeDeleteComponent } from './bitacora-type-delete/bitacora-type-delete.component';

@NgModule({
  declarations: [
	BitacoraTypeComponent,
	BitacoraTypesComponent,
	BitacoraTypeCreateComponent,
	BitacoraTypeEditComponent,
	BitacoraTypeShowComponent,
	BitacoraTypeDeleteComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    BitacoraTypeRoutingModule
  ]
})
export class BitacoraTypeModule { }
