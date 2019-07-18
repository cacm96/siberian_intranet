import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../../../../core/ui/material.module';
import { PhoneTypeRoutingModule } from './phone-type-routing.module';
import { PhoneTypeComponent } from './phone-type.component';
import { PhoneTypesComponent } from './phone-types/phone-types.component';
import { PhoneTypeCreateComponent } from './phone-type-create/phone-type-create.component';
import { PhoneTypeEditComponent } from './phone-type-edit/phone-type-edit.component';
import { PhoneTypeShowComponent } from './phone-type-show/phone-type-show.component';
import { PhoneTypeDeleteComponent } from './phone-type-delete/phone-type-delete.component';

@NgModule({
  declarations: [
	PhoneTypeComponent,
	PhoneTypesComponent,
	PhoneTypeCreateComponent,
	PhoneTypeEditComponent,
	PhoneTypeShowComponent,
	PhoneTypeDeleteComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    PhoneTypeRoutingModule
  ]
})
export class PhoneTypeModule { }
