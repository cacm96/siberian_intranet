import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ServiceDetailComponent } from './service-detail.component';
import { ServiceDetailsComponent } from './service-details/service-details.component';
import { ServiceDetailCreateComponent } from './service-detail-create/service-detail-create.component';
import { ServiceDetailEditComponent } from './service-detail-edit/service-detail-edit.component';
import { ServiceDetailShowComponent } from './service-detail-show/service-detail-show.component';
import { ServiceDetailDeleteComponent } from './service-detail-delete/service-detail-delete.component';

const routes: Routes = [

	{path: '', component: ServiceDetailComponent, canActivate: [],
		children:
		[
			{path: '', component: ServiceDetailsComponent},
			{path: 'create', component: ServiceDetailCreateComponent},
			{path: 'edit/:id', component: ServiceDetailEditComponent},
			{path: 'show/:id', component: ServiceDetailShowComponent},
			{path: 'delete/:id', component: ServiceDetailDeleteComponent}
		]
	},

];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]

})
export class ServiceDetailRoutingModule { }
