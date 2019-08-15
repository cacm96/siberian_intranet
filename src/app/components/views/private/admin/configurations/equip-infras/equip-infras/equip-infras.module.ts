import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../../../../../core/ui/material.module';
import { EquipInfrasRoutingModule } from './equip-infras-routing.module';
import { EquipInfrasComponent } from './equip-infras.component';
import { EquipInfrassComponent } from './equip-infrass/equip-infrass.component';
import { EquipInfrasCreateComponent } from './equip-infras-create/equip-infras-create.component';
import { EquipInfrasEditComponent } from './equip-infras-edit/equip-infras-edit.component';
import { EquipInfrasShowComponent } from './equip-infras-show/equip-infras-show.component';
import { EquipInfrasDeleteComponent } from './equip-infras-delete/equip-infras-delete.component';

@NgModule({
  declarations: [
	EquipInfrasComponent,
	EquipInfrassComponent,
	EquipInfrasCreateComponent,
	EquipInfrasEditComponent,
	EquipInfrasShowComponent,
	EquipInfrasDeleteComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    EquipInfrasRoutingModule
  ]
})
export class EquipInfrasModule { }
