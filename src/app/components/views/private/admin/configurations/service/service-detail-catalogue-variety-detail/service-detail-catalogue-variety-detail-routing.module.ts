import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ServiceDetailCatalogueVarietyDetailComponent } from './service-detail-catalogue-variety-detail.component';
import { ServiceDetailCatalogueVarietyDetailsComponent } from './service-detail-catalogue-variety-details/service-detail-catalogue-variety-details.component';
import { ServiceDetailCatalogueVarietyDetailCreateComponent } from './service-detail-catalogue-variety-detail-create/service-detail-catalogue-variety-detail-create.component';
import { ServiceDetailCatalogueVarietyDetailEditComponent } from './service-detail-catalogue-variety-detail-edit/service-detail-catalogue-variety-detail-edit.component';
import { ServiceDetailCatalogueVarietyDetailShowComponent } from './service-detail-catalogue-variety-detail-show/service-detail-catalogue-variety-detail-show.component';
import { ServiceDetailCatalogueVarietyDetailDeleteComponent } from './service-detail-catalogue-variety-detail-delete/service-detail-catalogue-variety-detail-delete.component';

const routes: Routes = [

	{path: '', component: ServiceDetailCatalogueVarietyDetailComponent, canActivate: [],
		children:
		[
			{path: '', component: ServiceDetailCatalogueVarietyDetailsComponent},
			{path: 'create', component: ServiceDetailCatalogueVarietyDetailCreateComponent},
			{path: 'edit/:id', component: ServiceDetailCatalogueVarietyDetailEditComponent},
			{path: 'show/:id', component: ServiceDetailCatalogueVarietyDetailShowComponent},
			{path: 'delete/:id', component: ServiceDetailCatalogueVarietyDetailDeleteComponent}
		]
	},

];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]

})
export class ServiceDetailCatalogueVarietyDetailRoutingModule { }
