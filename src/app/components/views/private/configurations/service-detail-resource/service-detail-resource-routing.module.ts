import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ServiceDetailResourceComponent } from './service-detail-resource.component';
import { ServiceDetailResourcesComponent } from './service-detail-resources/service-detail-resources.component';
import { ServiceDetailResourceCreateComponent } from './service-detail-resource-create/service-detail-resource-create.component';
import { ServiceDetailResourceEditComponent } from './service-detail-resource-edit/service-detail-resource-edit.component';
import { ServiceDetailResourceShowComponent } from './service-detail-resource-show/service-detail-resource-show.component';
import { ServiceDetailResourceDeleteComponent } from './service-detail-resource-delete/service-detail-resource-delete.component';

const routes: Routes = [

	{path: '', component: ServiceDetailResourceComponent, canActivate: [],
		children:
		[
			{path: '', component: ServiceDetailResourcesComponent},
			{path: 'create', component: ServiceDetailResourceCreateComponent},
			{path: 'edit/:id', component: ServiceDetailResourceEditComponent},
			{path: 'show/:id', component: ServiceDetailResourceShowComponent},
			{path: 'delete/:id', component: ServiceDetailResourceDeleteComponent}
		]
	},

];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]

})
export class ServiceDetailResourceRoutingModule { }
