import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ServiceOrderDetailComponent } from './service-order-detail.component';
import { ServiceOrderDetailsComponent } from './service-order-details/service-order-details.component';
import { ServiceOrderDetailCreateComponent } from './service-order-detail-create/service-order-detail-create.component';
import { ServiceOrderDetailEditComponent } from './service-order-detail-edit/service-order-detail-edit.component';
import { ServiceOrderDetailShowComponent } from './service-order-detail-show/service-order-detail-show.component';
import { ServiceOrderDetailDeleteComponent } from './service-order-detail-delete/service-order-detail-delete.component';

const routes: Routes = [

	{path: '', component: ServiceOrderDetailComponent, canActivate: [],
		children:
		[
			{path: '', component: ServiceOrderDetailsComponent},
			{path: 'create', component: ServiceOrderDetailCreateComponent},
			{path: 'edit/:id', component: ServiceOrderDetailEditComponent},
			{path: 'show/:id', component: ServiceOrderDetailShowComponent},
			{path: 'delete/:id', component: ServiceOrderDetailDeleteComponent}
		]
	},

];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]

})
export class ServiceOrderDetailRoutingModule { }
