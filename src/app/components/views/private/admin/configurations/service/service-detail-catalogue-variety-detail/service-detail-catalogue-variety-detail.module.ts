import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../../../../../../core/ui/material.module';
import { ServiceDetailCatalogueVarietyDetailRoutingModule } from './service-detail-catalogue-variety-detail-routing.module';
import { ServiceDetailCatalogueVarietyDetailComponent } from './service-detail-catalogue-variety-detail.component';
import { ServiceDetailCatalogueVarietyDetailsComponent } from './service-detail-catalogue-variety-details/service-detail-catalogue-variety-details.component';
import { ServiceDetailCatalogueVarietyDetailCreateComponent } from './service-detail-catalogue-variety-detail-create/service-detail-catalogue-variety-detail-create.component';
import { ServiceDetailCatalogueVarietyDetailEditComponent } from './service-detail-catalogue-variety-detail-edit/service-detail-catalogue-variety-detail-edit.component';
import { ServiceDetailCatalogueVarietyDetailShowComponent } from './service-detail-catalogue-variety-detail-show/service-detail-catalogue-variety-detail-show.component';
import { ServiceDetailCatalogueVarietyDetailDeleteComponent } from './service-detail-catalogue-variety-detail-delete/service-detail-catalogue-variety-detail-delete.component';

@NgModule({
  declarations: [
	ServiceDetailCatalogueVarietyDetailComponent,
	ServiceDetailCatalogueVarietyDetailsComponent,
	ServiceDetailCatalogueVarietyDetailCreateComponent,
	ServiceDetailCatalogueVarietyDetailEditComponent,
	ServiceDetailCatalogueVarietyDetailShowComponent,
	ServiceDetailCatalogueVarietyDetailDeleteComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ServiceDetailCatalogueVarietyDetailRoutingModule
  ]
})
export class ServiceDetailCatalogueVarietyDetailModule { }
