import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { RevitionComponent } from './revition.component';
import { RevitionsComponent } from './revitions/revitions.component';
import { RevitionCreateComponent } from './revition-create/revition-create.component';
import { RevitionEditComponent } from './revition-edit/revition-edit.component';
import { RevitionShowComponent } from './revition-show/revition-show.component';
import { RevitionDeleteComponent } from './revition-delete/revition-delete.component';

const routes: Routes = [

	{path: '', component: RevitionComponent, canActivate: [],
		children:
		[
			{path: '', component: RevitionsComponent},
			{path: 'create', component: RevitionCreateComponent},
			{path: 'edit/:id', component: RevitionEditComponent},
			{path: 'show/:id', component: RevitionShowComponent},
			{path: 'delete/:id', component: RevitionDeleteComponent}
		]
	},

];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]

})
export class RevitionRoutingModule { }
