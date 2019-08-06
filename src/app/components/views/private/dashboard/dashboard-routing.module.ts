import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { EquipComponent } from './service/equip/equip.component';
import { VarietyComponent } from './service/variety/variety.component';
import { SheetComponent } from './service/sheet/sheet.component';
import { StepperComponent } from './service/stepper/stepper.component';
import { MessageComponent } from './service/message/message.component';


const routes: Routes = [

	{path: '', component: DashboardComponent, canActivate: []},
	{path: 'equip', component: EquipComponent, canActivate: []},
	{path: 'variety', component: VarietyComponent, canActivate: []},
	{path: 'sheet', component: SheetComponent, canActivate: []},
	{path: 'stepper', component: StepperComponent, canActivate: []},
	{path: 'message', component: MessageComponent, canActivate: []},

];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]

})
export class DashboardRoutingModule { }
