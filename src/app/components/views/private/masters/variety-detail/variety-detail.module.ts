import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../../../../core/ui/material.module';
import { VarietyDetailRoutingModule } from './variety-detail-routing.module';
import { VarietyDetailComponent } from './variety-detail.component';
import { VarietyDetailsComponent } from './variety-details/variety-details.component';
import { VarietyDetailCreateComponent } from './variety-detail-create/variety-detail-create.component';
import { VarietyDetailEditComponent } from './variety-detail-edit/variety-detail-edit.component';
import { VarietyDetailShowComponent } from './variety-detail-show/variety-detail-show.component';
import { VarietyDetailDeleteComponent } from './variety-detail-delete/variety-detail-delete.component';

@NgModule({
  declarations: [
	VarietyDetailComponent,
	VarietyDetailsComponent,
	VarietyDetailCreateComponent,
	VarietyDetailEditComponent,
	VarietyDetailShowComponent,
	VarietyDetailDeleteComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    VarietyDetailRoutingModule
  ]
})
export class VarietyDetailModule { }
