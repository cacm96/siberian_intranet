import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../../../../core/ui/material.module';
import { WorkerTypeRoutingModule } from './worker-type-routing.module';
import { WorkerTypeComponent } from './worker-type.component';
import { WorkerTypesComponent } from './worker-types/worker-types.component';
import { WorkerTypeCreateComponent } from './worker-type-create/worker-type-create.component';
import { WorkerTypeEditComponent } from './worker-type-edit/worker-type-edit.component';
import { WorkerTypeShowComponent } from './worker-type-show/worker-type-show.component';
import { WorkerTypeDeleteComponent } from './worker-type-delete/worker-type-delete.component';

@NgModule({
  declarations: [
	WorkerTypeComponent,
	WorkerTypesComponent,
	WorkerTypeCreateComponent,
	WorkerTypeEditComponent,
	WorkerTypeShowComponent,
	WorkerTypeDeleteComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    WorkerTypeRoutingModule
  ]
})
export class WorkerTypeModule { }
