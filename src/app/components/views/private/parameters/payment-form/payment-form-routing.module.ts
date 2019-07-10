import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { PaymentFormComponent } from './payment-form.component';
import { PaymentFormsComponent } from './payment-forms/payment-forms.component';
import { PaymentFormCreateComponent } from './payment-form-create/payment-form-create.component';
import { PaymentFormEditComponent } from './payment-form-edit/payment-form-edit.component';
import { PaymentFormShowComponent } from './payment-form-show/payment-form-show.component';
import { PaymentFormDeleteComponent } from './payment-form-delete/payment-form-delete.component';

const routes: Routes = [

	{path: '', component: PaymentFormComponent, canActivate: [],
		children:
		[
			{path: '', component: PaymentFormsComponent},
			{path: 'create', component: PaymentFormCreateComponent},
			{path: 'edit/:id', component: PaymentFormEditComponent},
			{path: 'show/:id', component: PaymentFormShowComponent},
			{path: 'delete/:id', component: PaymentFormDeleteComponent}
		]
	},

];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]

})
export class PaymentFormRoutingModule { }
