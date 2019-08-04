import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../../../../core/ui/material.module';
import { PromotionCatalogueVarietyDetailRoutingModule } from './promotion-catalogue-variety-detail-routing.module';
import { PromotionCatalogueVarietyDetailComponent } from './promotion-catalogue-variety-detail.component';
import { PromotionCatalogueVarietyDetailsComponent } from './promotion-catalogue-variety-details/promotion-catalogue-variety-details.component';
import { PromotionCatalogueVarietyDetailCreateComponent } from './promotion-catalogue-variety-detail-create/promotion-catalogue-variety-detail-create.component';
import { PromotionCatalogueVarietyDetailEditComponent } from './promotion-catalogue-variety-detail-edit/promotion-catalogue-variety-detail-edit.component';
import { PromotionCatalogueVarietyDetailShowComponent } from './promotion-catalogue-variety-detail-show/promotion-catalogue-variety-detail-show.component';
import { PromotionCatalogueVarietyDetailDeleteComponent } from './promotion-catalogue-variety-detail-delete/promotion-catalogue-variety-detail-delete.component';

@NgModule({
  declarations: [
	PromotionCatalogueVarietyDetailComponent,
	PromotionCatalogueVarietyDetailsComponent,
	PromotionCatalogueVarietyDetailCreateComponent,
	PromotionCatalogueVarietyDetailEditComponent,
	PromotionCatalogueVarietyDetailShowComponent,
	PromotionCatalogueVarietyDetailDeleteComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    PromotionCatalogueVarietyDetailRoutingModule
  ]
})
export class PromotionCatalogueVarietyDetailModule { }
