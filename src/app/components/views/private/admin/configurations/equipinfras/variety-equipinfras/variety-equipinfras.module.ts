import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VarietyEquipinfrasComponent } from './variety-equipinfras.component';
import { VarietyEquipinfrasCreateComponent } from './variety-equipinfras-create/variety-equipinfras-create.component';
import { VarietyEquipinfrasEditComponent } from './variety-equipinfras-edit/variety-equipinfras-edit.component';
import { VarietyEquipinfrasShowComponent } from './variety-equipinfras-show/variety-equipinfras-show.component';
import { VarietyEquipinfrasDeleteComponent } from './variety-equipinfras-delete/variety-equipinfras-delete.component';
import { VarietysEquipinfrasComponent } from './varietys-equipinfras/varietys-equipinfras.component';

@NgModule({
  declarations: [VarietyEquipinfrasComponent, VarietyEquipinfrasCreateComponent, VarietyEquipinfrasEditComponent, VarietyEquipinfrasShowComponent, VarietyEquipinfrasDeleteComponent, VarietysEquipinfrasComponent],
  imports: [
    CommonModule
  ]
})
export class VarietyEquipinfrasModule { }
