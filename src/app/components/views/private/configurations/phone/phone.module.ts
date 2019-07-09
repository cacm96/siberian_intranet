import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhoneComponent } from './phone.component';
import { PhonesComponent } from './phones/phones.component';
import { PhoneCreateComponent } from './phone-create/phone-create.component';
import { PhoneEditComponent } from './phone-edit/phone-edit.component';
import { PhoneShowComponent } from './phone-show/phone-show.component';
import { PhoneDeleteComponent } from './phone-delete/phone-delete.component';

@NgModule({
  declarations: [PhoneComponent, PhonesComponent, PhoneCreateComponent, PhoneEditComponent, PhoneShowComponent, PhoneDeleteComponent],
  imports: [
    CommonModule
  ]
})
export class PhoneModule { }
