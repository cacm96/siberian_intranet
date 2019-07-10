import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ServiceDetailActivityComponent } from './service-detail-activity.component';
import { ServiceDetailActivitysComponent } from './service-detail-activitys/service-detail-activitys.component';
import { ServiceDetailActivityCreateComponent } from './service-detail-activity-create/service-detail-activity-create.component';
import { ServiceDetailActivityEditComponent } from './service-detail-activity-edit/service-detail-activity-edit.component';
import { ServiceDetailActivityShowComponent } from './service-detail-activity-show/service-detail-activity-show.component';
import { ServiceDetailActivityDeleteComponent } from './service-detail-activity-delete/service-detail-activity-delete.component';

const routes: Routes = [

	{path: '', component: ServiceDetailActivityComponent, canActivate: [],
		children:
		[
			{path: '', component: ServiceDetailActivitysComponent},
			{path: 'create', component: ServiceDetailActivityCreateComponent},
			{path: 'edit/:id', component: ServiceDetailActivityEditComponent},
			{path: 'show/:id', component: ServiceDetailActivityShowComponent},
			{path: 'delete/:id', component: ServiceDetailActivityDeleteComponent}
		]
	},

];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]

})
export class ServiceDetailActivityRoutingModule { }
