import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../../../../../core/ui/material.module';
import { CalendarWorkerRoutingModule } from './calendar-worker-routing.module';
import { CalendarWorkerComponent } from './calendar-worker.component';
import { CalendarWorkersComponent } from './calendar-workers/calendar-workers.component';
import { CalendarWorkerCreateComponent } from './calendar-worker-create/calendar-worker-create.component';
import { CalendarWorkerEditComponent } from './calendar-worker-edit/calendar-worker-edit.component';
import { CalendarWorkerShowComponent } from './calendar-worker-show/calendar-worker-show.component';
import { CalendarWorkerDeleteComponent } from './calendar-worker-delete/calendar-worker-delete.component';

@NgModule({
  declarations: [
	CalendarWorkerComponent,
	CalendarWorkersComponent,
	CalendarWorkerCreateComponent,
	CalendarWorkerEditComponent,
	CalendarWorkerShowComponent,
	CalendarWorkerDeleteComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    CalendarWorkerRoutingModule
  ]
})
export class CalendarWorkerModule { }
