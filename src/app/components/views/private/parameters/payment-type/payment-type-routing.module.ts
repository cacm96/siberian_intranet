import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { PaymentTypeComponent } from './payment-type.component';
import { PaymentTypesComponent } from './payment-types/payment-types.component';
import { PaymentTypeCreateComponent } from './payment-type-create/payment-type-create.component';
import { PaymentTypeEditComponent } from './payment-type-edit/payment-type-edit.component';
import { PaymentTypeShowComponent } from './payment-type-show/payment-type-show.component';
import { PaymentTypeDeleteComponent } from './payment-type-delete/payment-type-delete.component';

const routes: Routes = [

	{path: '', component: PaymentTypeComponent, canActivate: [],
		children:
		[
			{path: '', component: PaymentTypesComponent},
			{path: 'create', component: PaymentTypeCreateComponent},
			{path: 'edit/:id', component: PaymentTypeEditComponent},
			{path: 'show/:id', component: PaymentTypeShowComponent},
			{path: 'delete/:id', component: PaymentTypeDeleteComponent}
		]
	},

];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]

})
export class PaymentTypeRoutingModule { }
