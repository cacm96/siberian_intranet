import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../../../../../core/ui/material.module';
import { PromotionOriginRoutingModule } from './promotion-origin-routing.module';
import { PromotionOriginComponent } from './promotion-origin.component';
import { PromotionsOriginsComponent } from './promotions-origins/promotions-origins.component';


@NgModule({
  declarations:
  [
  	PromotionOriginComponent,
  	PromotionsOriginsComponent,

  ],
  imports: [
    CommonModule,
    PromotionOriginRoutingModule,
    MaterialModule
  ]
})
export class PromotionOriginModule { }
