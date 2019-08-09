import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { RequestComponent } from './request.component';
import { RequestDetailComponent } from './request-detail/request-detail.component';
import { RequestsComponent } from './requests/requests.component';
import { EquipComponent } from './equip/equip.component';
import { VarietyComponent } from './variety/variety.component';
import { SheetComponent } from './sheet/sheet.component';
import { StepperComponent } from './stepper/stepper.component';
import { MessageComponent } from './message/message.component';


const routes: Routes = [

	{path: '', component: RequestComponent, canActivate: [],
		children:
		[
			{path: '', component: RequestsComponent},
			{path: 'detail/:id', component: RequestDetailComponent, canActivate: []},
			{path: 'equip', component: EquipComponent, canActivate: []},
			{path: 'variety', component: VarietyComponent, canActivate: []},
			{path: 'sheet', component: SheetComponent, canActivate: []},
			{path: 'stepper', component: StepperComponent, canActivate: []},
			{path: 'message', component: MessageComponent, canActivate: []},
		]
	},	

];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]

})

export class RequestRoutingModule { }
