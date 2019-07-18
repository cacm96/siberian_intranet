import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../../../../core/ui/material.module';
import { PaymentFormRoutingModule } from './payment-form-routing.module';
import { PaymentFormComponent } from './payment-form.component';
import { PaymentFormsComponent } from './payment-forms/payment-forms.component';
import { PaymentFormCreateComponent } from './payment-form-create/payment-form-create.component';
import { PaymentFormEditComponent } from './payment-form-edit/payment-form-edit.component';
import { PaymentFormShowComponent } from './payment-form-show/payment-form-show.component';
import { PaymentFormDeleteComponent } from './payment-form-delete/payment-form-delete.component';

@NgModule({
  declarations: [
	PaymentFormComponent,
	PaymentFormsComponent,
	PaymentFormCreateComponent,
	PaymentFormEditComponent,
	PaymentFormShowComponent,
	PaymentFormDeleteComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    PaymentFormRoutingModule
  ]
})
export class PaymentFormModule { }
