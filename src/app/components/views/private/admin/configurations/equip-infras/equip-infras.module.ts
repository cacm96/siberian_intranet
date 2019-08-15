import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../../../../../core/ui/material.module';
import { EquipInfrasRoutingModule } from './equip-infras-routing.module';
import { EquipInfrasComponent } from './equip-infras.component';
import { EquipsInfrasComponent } from './equips-infras/equips-infras.component';
import { VarietyComponent } from './variety/variety.component';
import { VarietyDetailComponent } from './variety-detail/variety-detail.component';
import { VarietyEquipinfrasComponent } from './variety-equipinfras/variety-equipinfras.component';

@NgModule({
  declarations:
  [
  	EquipInfrasComponent,
  	EquipsInfrasComponent,
  	VarietyComponent,
    VarietyDetailComponent,
  	VarietyEquipinfrasComponent,
  ],
  imports: [
    CommonModule,
    EquipInfrasRoutingModule,
    MaterialModule
  ]
})

export class EquipInfrasModule { }
