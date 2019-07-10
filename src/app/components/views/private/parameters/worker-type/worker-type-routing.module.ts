import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { WorkerTypeComponent } from './worker-type.component';
import { WorkerTypesComponent } from './worker-types/worker-types.component';
import { WorkerTypeCreateComponent } from './worker-type-create/worker-type-create.component';
import { WorkerTypeEditComponent } from './worker-type-edit/worker-type-edit.component';
import { WorkerTypeShowComponent } from './worker-type-show/worker-type-show.component';
import { WorkerTypeDeleteComponent } from './worker-type-delete/worker-type-delete.component';

const routes: Routes = [

	{path: '', component: WorkerTypeComponent, canActivate: [],
		children:
		[
			{path: '', component: WorkerTypesComponent},
			{path: 'create', component: WorkerTypeCreateComponent},
			{path: 'edit/:id', component: WorkerTypeEditComponent},
			{path: 'show/:id', component: WorkerTypeShowComponent},
			{path: 'delete/:id', component: WorkerTypeDeleteComponent}
		]
	},

];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]

})
export class WorkerTypeRoutingModule { }
