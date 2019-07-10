import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ServiceDetailPoliticComponent } from './service-detail-politic.component';
import { ServiceDetailPoliticsComponent } from './service-detail-politics/service-detail-politics.component';
import { ServiceDetailPoliticCreateComponent } from './service-detail-politic-create/service-detail-politic-create.component';
import { ServiceDetailPoliticEditComponent } from './service-detail-politic-edit/service-detail-politic-edit.component';
import { ServiceDetailPoliticShowComponent } from './service-detail-politic-show/service-detail-politic-show.component';
import { ServiceDetailPoliticDeleteComponent } from './service-detail-politic-delete/service-detail-politic-delete.component';

const routes: Routes = [

	{path: '', component: ServiceDetailPoliticComponent, canActivate: [],
		children:
		[
			{path: '', component: ServiceDetailPoliticsComponent},
			{path: 'create', component: ServiceDetailPoliticCreateComponent},
			{path: 'edit/:id', component: ServiceDetailPoliticEditComponent},
			{path: 'show/:id', component: ServiceDetailPoliticShowComponent},
			{path: 'delete/:id', component: ServiceDetailPoliticDeleteComponent}
		]
	},

];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]

})
export class ServiceDetailPoliticRoutingModule { }
