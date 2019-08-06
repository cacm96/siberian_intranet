import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ServiceOrderComponent } from './service-order.component';
import { ServiceOrdersComponent } from './service-orders/service-orders.component';
import { ServiceOrderCreateComponent } from './service-order-create/service-order-create.component';
import { ServiceOrderEditComponent } from './service-order-edit/service-order-edit.component';
import { ServiceOrderShowComponent } from './service-order-show/service-order-show.component';
import { ServiceOrderDeleteComponent } from './service-order-delete/service-order-delete.component';

const routes: Routes = [

	{path: '', component: ServiceOrderComponent, canActivate: [],
		children:
		[
			{path: '', component: ServiceOrdersComponent},
			{path: 'create', component: ServiceOrderCreateComponent},
			{path: 'edit/:id', component: ServiceOrderEditComponent},
			{path: 'show/:id', component: ServiceOrderShowComponent},
			{path: 'delete/:id', component: ServiceOrderDeleteComponent}
		]
	},

];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]

})
export class ServiceOrderRoutingModule { }
