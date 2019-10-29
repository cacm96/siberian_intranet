import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { SkillComponent } from './skill.component';
import { SkillsComponent } from './skills/skills.component';
import { AddSkillLenderComponent } from './add-skill-lender/add-skill-lender.component';

const routes: Routes = [

	{path: '', component: SkillComponent, canActivate: [],
		children:
		[
			{path: '', component: SkillsComponent},
			
			{path: ':id/addSkillLender', component: AddSkillLenderComponent},


			{path: 'skill', canActivate: [],
				children:
				[
					{
						path: '',
		                loadChildren: '../skill/skill/skill.module#SkillModule',
					}
				]
			},
			{path: 'lender', canActivate: [],
				children:
				[
					{
						path: '',
		                loadChildren: './lender/lender.module#LenderModule',
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
