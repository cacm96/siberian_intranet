import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../../../../core/ui/material.module';
import { WorkerRoutingModule } from './worker-routing.module';
import { WorkerComponent } from './worker.component';
import { WorkersComponent } from './workers/workers.component';
import { WorkerCreateComponent } from './worker-create/worker-create.component';
import { WorkerEditComponent } from './worker-edit/worker-edit.component';
import { WorkerShowComponent } from './worker-show/worker-show.component';
import { WorkerDeleteComponent } from './worker-delete/worker-delete.component';

@NgModule({
  declarations: [
	WorkerComponent,
	WorkersComponent,
	WorkerCreateComponent,
	WorkerEditComponent,
	WorkerShowComponent,
	WorkerDeleteComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    WorkerRoutingModule
  ]
})
export class WorkerModule { }
