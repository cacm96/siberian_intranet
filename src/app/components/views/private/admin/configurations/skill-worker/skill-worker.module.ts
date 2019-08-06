import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../../../../../core/ui/material.module';
import { SkillWorkerRoutingModule } from './skill-worker-routing.module';
import { SkillWorkerComponent } from './skill-worker.component';
import { SkillWorkersComponent } from './skill-workers/skill-workers.component';
import { SkillWorkerCreateComponent } from './skill-worker-create/skill-worker-create.component';
import { SkillWorkerEditComponent } from './skill-worker-edit/skill-worker-edit.component';
import { SkillWorkerShowComponent } from './skill-worker-show/skill-worker-show.component';
import { SkillWorkerDeleteComponent } from './skill-worker-delete/skill-worker-delete.component';

@NgModule({
  declarations: [
	SkillWorkerComponent,
	SkillWorkersComponent,
	SkillWorkerCreateComponent,
	SkillWorkerEditComponent,
	SkillWorkerShowComponent,
	SkillWorkerDeleteComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    SkillWorkerRoutingModule
  ]
})

export class SkillWorkerModule { }
