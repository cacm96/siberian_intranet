import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ServiceComponent } from './service.component';
import { ServicesComponent } from './services/services.component';
import { AddResourceComponent } from './add-resource/add-resource.component';
import { AddPoliticComponent } from './add-politic/add-politic.component';
import { AddActivityComponent } from './add-activity/add-activity.component';
import { AddSkillComponent } from './add-skill/add-skill.component';

const routes: Routes = [

	{path: '', component: ServiceComponent, canActivate: [],
		children:
		[
			{path: '', component: ServicesComponent},

			{path: ':id/addResource', component: AddResourceComponent},
			{path: ':id/addPolitic', component: AddPoliticComponent},
			{path: ':id/addActivity', component: AddActivityComponent},
			{path: ':id/addSkill', component: AddSkillComponent},

			{path: 'activity', canActivate: [],
				children:
				[
					{
						path: '',
		                loadChildren: './activity/activity.module#ActivityModule',
					}
				]
			},
			{path: 'component', canActivate: [],
				children:
				[
					{
						path: '',
		                loadChildren: './component/component.module#ComponentModule',
					}
				]
			},
			{path: 'politic', canActivate: [],
				children:
				[
					{
						path: '',
		                loadChildren: './politic/politic.module#PoliticModule',
					}
				]
			},
			{path: 'resource', canActivate: [],
				children:
				[
					{
						path: '',
		                loadChildren: './resource/resource.module#ResourceModule',
					}
				]
			},
			{path: 'service-detail', canActivate: [],
				children:
				[
					{
						path: '',
		                loadChildren: './service-detail/service-detail.module#ServiceDetailModule',
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

export class ServiceRoutingModule { }
