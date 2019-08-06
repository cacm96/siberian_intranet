import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { SkillWorkerComponent } from './skill-worker.component';
import { SkillWorkersComponent } from './skill-workers/skill-workers.component';
import { SkillWorkerCreateComponent } from './skill-worker-create/skill-worker-create.component';
import { SkillWorkerEditComponent } from './skill-worker-edit/skill-worker-edit.component';
import { SkillWorkerShowComponent } from './skill-worker-show/skill-worker-show.component';
import { SkillWorkerDeleteComponent } from './skill-worker-delete/skill-worker-delete.component';

const routes: Routes = [

	{path: '', component: SkillWorkerComponent, canActivate: [],
		children:
		[
			{path: '', component: SkillWorkersComponent},
			{path: 'create', component: SkillWorkerCreateComponent},
			{path: 'edit/:id', component: SkillWorkerEditComponent},
			{path: 'show/:id', component: SkillWorkerShowComponent},
			{path: 'delete/:id', component: SkillWorkerDeleteComponent}
		]
	},

];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]

})
export class SkillWorkerRoutingModule { }
