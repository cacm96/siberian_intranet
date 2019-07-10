import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { GenderComponent } from './gender.component';
import { GendersComponent } from './genders/genders.component';
import { GenderCreateComponent } from './gender-create/gender-create.component';
import { GenderEditComponent } from './gender-edit/gender-edit.component';
import { GenderShowComponent } from './gender-show/gender-show.component';
import { GenderDeleteComponent } from './gender-delete/gender-delete.component';

const routes: Routes = [

	{path: '', component: GenderComponent, canActivate: [],
		children:
		[
			{path: '', component: GendersComponent},
			{path: 'create', component: GenderCreateComponent},
			{path: 'edit/:id', component: GenderEditComponent},
			{path: 'show/:id', component: GenderShowComponent},
			{path: 'delete/:id', component: GenderDeleteComponent}
		]
	},

];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]

})
export class GenderRoutingModule { }
