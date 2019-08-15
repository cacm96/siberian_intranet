import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../../../../core/ui/material.module';
import { ConfigurationRoutingModule } from './configuration-routing.module';
import { ConfigurationComponent } from './configuration.component';
import { VarietyEquipinfrasComponent } from './equipo-infras/variety-equipinfras/variety-equipinfras.component';

@NgModule({
  declarations: [
    ConfigurationComponent,
    VarietyEquipinfrasComponent,
  ],
  imports:[
    CommonModule,
    MaterialModule,
    ConfigurationRoutingModule
  ],
})
export class ConfigurationModule { }
