import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { CalendarWorkerComponent } from './calendar-worker.component';
import { CalendarWorkersComponent } from './calendar-workers/calendar-workers.component';
import { CalendarWorkerCreateComponent } from './calendar-worker-create/calendar-worker-create.component';
import { CalendarWorkerEditComponent } from './calendar-worker-edit/calendar-worker-edit.component';
import { CalendarWorkerShowComponent } from './calendar-worker-show/calendar-worker-show.component';
import { CalendarWorkerDeleteComponent } from './calendar-worker-delete/calendar-worker-delete.component';

const routes: Routes = [

	{path: '', component: CalendarWorkerComponent, canActivate: [],
		children:
		[
			{path: '', component: CalendarWorkersComponent},
			{path: 'create', component: CalendarWorkerCreateComponent},
			{path: 'edit/:id', component: CalendarWorkerEditComponent},
			{path: 'show/:id', component: CalendarWorkerShowComponent},
			{path: 'delete/:id', component: CalendarWorkerDeleteComponent}
		]
	},

];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]

})
export class CalendarWorkerRoutingModule { }
