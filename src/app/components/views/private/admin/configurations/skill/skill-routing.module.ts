import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { SkillComponent } from './skill.component';
import { SkillsComponent } from './skills/skills.component';

const routes: Routes = [

	{path: '', component: SkillComponent, canActivate: [],
		children:
		[
			{path: '', component: SkillsComponent},
			{path: 'service-detail-skill', canActivate: [],
				children:
				[
					{
						path: '',
		                loadChildren: '../service-detail-skill/service-detail-skill.module#ServiceDetailSkillModule',
					}
				]
			},
			{path: 'skill', canActivate: [],
				children:
				[
					{
						path: '',
		                loadChildren: '../skill/skill/skill.module#SkillModule',
					}
				]
			},
			{path: 'skill-worker', canActivate: [],
				children:
				[
					{
						path: '',
		                loadChildren: './skill-worker/skill-worker.module#SkillWorkerModule',
					}
				]
			},
		]
	},	

];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]

})

export class SkillRoutingModule { }
