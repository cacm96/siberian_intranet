import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../../../core/ui/material.module';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { EquipComponent } from './service/equip/equip.component';
import { VarietyComponent } from './service/variety/variety.component';
import { SheetComponent } from './service/sheet/sheet.component';
import { StepperComponent } from './service/stepper/stepper.component';
import { MessageComponent } from './service/message/message.component';

@NgModule({
  declarations:
  [
    DashboardComponent,
    EquipComponent,
    VarietyComponent,
    SheetComponent,
    StepperComponent,
    MessageComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MaterialModule
  ]
})
export class DashboardModule { }
