import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../../../../core/ui/material.module';
import { PaymentTypeRoutingModule } from './payment-type-routing.module';
import { PaymentTypeComponent } from './payment-type.component';
import { PaymentTypesComponent } from './payment-types/payment-types.component';
import { PaymentTypeCreateComponent } from './payment-type-create/payment-type-create.component';
import { PaymentTypeEditComponent } from './payment-type-edit/payment-type-edit.component';
import { PaymentTypeShowComponent } from './payment-type-show/payment-type-show.component';
import { PaymentTypeDeleteComponent } from './payment-type-delete/payment-type-delete.component';

@NgModule({
  declarations: [
	PaymentTypeComponent,
	PaymentTypesComponent,
	PaymentTypeCreateComponent,
	PaymentTypeEditComponent,
	PaymentTypeShowComponent,
	PaymentTypeDeleteComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    PaymentTypeRoutingModule
  ]
})
export class PaymentTypeModule { }
