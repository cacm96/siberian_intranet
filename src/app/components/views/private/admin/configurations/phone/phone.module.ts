import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../../../../../core/ui/material.module';
import { PhoneRoutingModule } from './phone-routing.module';
import { PhoneComponent } from './phone.component';
import { PhonesComponent } from './phones/phones.component';
import { PhoneCreateComponent } from './phone-create/phone-create.component';
import { PhoneEditComponent } from './phone-edit/phone-edit.component';
import { PhoneShowComponent } from './phone-show/phone-show.component';
import { PhoneDeleteComponent } from './phone-delete/phone-delete.component';

@NgModule({
  declarations: [
	PhoneComponent,
	PhonesComponent,
	PhoneCreateComponent,
	PhoneEditComponent,
	PhoneShowComponent,
	PhoneDeleteComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    PhoneRoutingModule
  ]
})
export class PhoneModule { }
