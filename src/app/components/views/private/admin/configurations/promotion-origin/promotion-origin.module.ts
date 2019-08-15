import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../../../../../core/ui/material.module';
import { PromotionOriginRoutingModule } from './promotion-origin-routing.module';
import { PromotionOriginComponent } from './promotion-origin.component';
import { PromotionsOriginsComponent } from './promotions-origins/promotions-origins.component';
import { PromotionComponent } from './promotion/promotion.component';
import { PromotionCatalogueComponent } from './promotion-catalogue/promotion-catalogue.component';
import { PromotionTargetComponent } from './promotion-target/promotion-target.component';


@NgModule({
  declarations:
  [
  	PromotionOriginComponent,
  	PromotionsOriginsComponent,
    PromotionComponent,
  	PromotionCatalogueComponent,
	PromotionTargetComponent,

  ],
  imports: [
    CommonModule,
    PromotionOriginRoutingModule,
    MaterialModule
  ]
})
export class PromotionOriginModule { }
