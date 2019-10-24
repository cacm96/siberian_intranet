import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LenderComponent } from './lender.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RequestComponent } from './request/request.component';
import { ServiceComponent } from './service/service.component';
import { DiagnosisComponent} from './diagnosis/diagnosis.component';
import { BudgetComponent} from './budget/budget.component';




const routes: Routes = [

	{path: '', component: LenderComponent, canActivate: []},
	{path: 'dashboard', component: DashboardComponent, canActivate: []},
	{path: 'request', component: RequestComponent, canActivate: []},
	{path: 'service', component: ServiceComponent, canActivate: []},
	{path: 'diagnosis', component:DiagnosisComponent, canActivate: []},
    {path: 'budget', component:BudgetComponent, canActivate: []},
	{path: 'profile', canActivate: [],
	
		children:
		[
			{
				path: '',
                loadChildren: '../lender/profile/profile.module#ProfileModule',
			}
		]
	},
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]

})
export class LenderRoutingModule { }
