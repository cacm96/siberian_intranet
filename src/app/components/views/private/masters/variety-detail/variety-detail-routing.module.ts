import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { VarietyDetailComponent } from './variety-detail.component';
import { VarietyDetailsComponent } from './variety-details/variety-details.component';
import { VarietyDetailCreateComponent } from './variety-detail-create/variety-detail-create.component';
import { VarietyDetailEditComponent } from './variety-detail-edit/variety-detail-edit.component';
import { VarietyDetailShowComponent } from './variety-detail-show/variety-detail-show.component';
import { VarietyDetailDeleteComponent } from './variety-detail-delete/variety-detail-delete.component';

const routes: Routes = [

	{path: '', component: VarietyDetailComponent, canActivate: [],
		children:
		[
			{path: '', component: VarietyDetailsComponent},
			{path: 'create', component: VarietyDetailCreateComponent},
			{path: 'edit/:id', component: VarietyDetailEditComponent},
			{path: 'show/:id', component: VarietyDetailShowComponent},
			{path: 'delete/:id', component: VarietyDetailDeleteComponent}
		]
	},

];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]

})
export class VarietyDetailRoutingModule { }
