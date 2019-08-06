import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ResultComponent } from './result.component';
import { ResultsComponent } from './results/results.component';
import { ResultCreateComponent } from './result-create/result-create.component';
import { ResultEditComponent } from './result-edit/result-edit.component';
import { ResultShowComponent } from './result-show/result-show.component';
import { ResultDeleteComponent } from './result-delete/result-delete.component';

const routes: Routes = [

	{path: '', component: ResultComponent, canActivate: [],
		children:
		[
			{path: '', component: ResultsComponent},
			{path: 'create', component: ResultCreateComponent},
			{path: 'edit/:id', component: ResultEditComponent},
			{path: 'show/:id', component: ResultShowComponent},
			{path: 'delete/:id', component: ResultDeleteComponent}
		]
	},

];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]

})
export class ResultRoutingModule { }
