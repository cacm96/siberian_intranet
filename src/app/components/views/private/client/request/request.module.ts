import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../../../../core/ui/material.module';
import { RequestRoutingModule } from './request-routing.module';
import { RequestComponent } from './request.component';
import { RequestDetailComponent } from './request-detail/request-detail.component';
import { RequestsComponent } from './requests/requests.component';
import { EquipComponent } from './equip/equip.component';
import { VarietyComponent } from './variety/variety.component';
import { SheetComponent } from './sheet/sheet.component';
import { StepperComponent } from './stepper/stepper.component';
import { MessageComponent } from './message/message.component';


@NgModule({
  declarations:
  [
  	RequestComponent,
  	RequestsComponent,
  	EquipComponent,
    VarietyComponent,
    SheetComponent,
    StepperComponent,
    MessageComponent,
    RequestDetailComponent
  ],
  imports: [
    CommonModule,
    RequestRoutingModule,
    MaterialModule
  ]
})

export class RequestModule { }
