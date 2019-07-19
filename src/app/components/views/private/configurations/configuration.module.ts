import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../../../core/ui/material.module';
import { ConfigurationRoutingModule } from './configuration-routing.module';
import { ConfigurationComponent } from './configuration.component';

@NgModule({
  declarations: [
    ConfigurationComponent,
  ],
  imports:[
    CommonModule,
    MaterialModule,
    ConfigurationRoutingModule
  ],
})
export class ConfigurationModule { }
