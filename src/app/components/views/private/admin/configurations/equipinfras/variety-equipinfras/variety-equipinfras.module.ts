import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../../../../../../core/ui/material.module';
import { VarietyEquipinfrasRoutingModule } from './variety-equipinfras-routing.module';
import { VarietyEquipinfrasComponent } from './variety-equipinfras.component';
import { VarietysEquipinfrasComponent } from './varietys-equipinfras/varietys-equipinfras.component';
import { VarietyEquipinfrasCreateComponent } from './variety-equipinfras-create/variety-equipinfras-create.component';
import { VarietyEquipinfrasEditComponent } from './variety-equipinfras-edit/variety-equipinfras-edit.component';
import { VarietyEquipinfrasShowComponent } from './variety-equipinfras-show/variety-equipinfras-show.component';
import { VarietyEquipinfrasDeleteComponent } from './variety-equipinfras-delete/variety-equipinfras-delete.component';

@NgModule({
  declarations: [
	VarietyEquipinfrasComponent,
	VarietysEquipinfrasComponent,
	VarietyEquipinfrasCreateComponent,
	VarietyEquipinfrasEditComponent,
	VarietyEquipinfrasShowComponent,
	VarietyEquipinfrasDeleteComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    VarietyEquipinfrasRoutingModule
  ]
})
export class VarietyEquipinfrasModule { }
