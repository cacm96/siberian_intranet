import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../../../../../core/ui/material.module';
import { EquipinfrasRoutingModule } from './equipinfras-routing.module';
import { EquipinfrasComponent } from './equipinfras.component';
import { EquipsinfrasComponent } from './equipsinfras/equipsinfras.component';

@NgModule({
  declarations:
  [
  	EquipinfrasComponent,
  	EquipsinfrasComponent,
  ],
  imports: [
    CommonModule,
    EquipinfrasRoutingModule,
    MaterialModule
  ]
})
export class EquipinfrasModule { }
