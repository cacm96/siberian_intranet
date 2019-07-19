import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { IndexManagerComponent } from './manager/index-manager/index-manager.component';
import { IndexAdminComponent } from './admin/index-admin/index-admin.component';
import { IndexLenderComponent } from './lender/index-lender/index-lender.component';
import { IndexClientComponent } from './client/index-client/index-client.component';
import { EquipComponent } from './service/equip/equip.component';
import { VarietyComponent } from './service/variety/variety.component';
import { SheetComponent } from './service/sheet/sheet.component';
import { StepperComponent } from './service/stepper/stepper.component';
import { MessageComponent } from './service/message/message.component';


const routes: Routes = [

	{path: '', component: DashboardComponent, canActivate: []},
    {path: 'client', component: IndexClientComponent, canActivate: []},
	{path: 'lender', component: IndexLenderComponent, canActivate: []},
	{path: 'manager', component: IndexManagerComponent, canActivate: []},
	{path: 'admin', component: IndexAdminComponent, canActivate: []},
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
