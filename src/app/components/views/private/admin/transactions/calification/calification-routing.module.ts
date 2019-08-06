import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { CalificationComponent } from './calification.component';
import { CalificationsComponent } from './califications/califications.component';
import { CalificationCreateComponent } from './calification-create/calification-create.component';
import { CalificationEditComponent } from './calification-edit/calification-edit.component';
import { CalificationShowComponent } from './calification-show/calification-show.component';
import { CalificationDeleteComponent } from './calification-delete/calification-delete.component';

const routes: Routes = [

	{path: '', component: CalificationComponent, canActivate: [],
		children:
		[
			{path: '', component: CalificationsComponent},
			{path: 'create', component: CalificationCreateComponent},
			{path: 'edit/:id', component: CalificationEditComponent},
			{path: 'show/:id', component: CalificationShowComponent},
			{path: 'delete/:id', component: CalificationDeleteComponent}
		]
	},

];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]

})
export class CalificationRoutingModule { }
