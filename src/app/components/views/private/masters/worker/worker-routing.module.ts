import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { WorkerComponent } from './worker.component';
import { WorkersComponent } from './workers/workers.component';
import { WorkerCreateComponent } from './worker-create/worker-create.component';
import { WorkerEditComponent } from './worker-edit/worker-edit.component';
import { WorkerShowComponent } from './worker-show/worker-show.component';
import { WorkerDeleteComponent } from './worker-delete/worker-delete.component';
const routes: Routes = [

	{path: '', component: WorkerComponent, canActivate: [],
		children:
		[
			{path: '', component: WorkersComponent},
			{path: 'create', component: WorkerCreateComponent},
			{path: 'edit/:id', component: WorkerEditComponent},
			{path: 'show/:id', component: WorkerShowComponent},
			{path: 'delete/:id', component: WorkerDeleteComponent}
		]
	},

];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]

})
export class WorkerRoutingModule { }
