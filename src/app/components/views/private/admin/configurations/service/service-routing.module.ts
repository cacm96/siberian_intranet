import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ServiceComponent } from './service.component';
import { ServicesComponent } from './services/services.component';

const routes: Routes = [

	{path: '', component: ServiceComponent, canActivate: [],
		children:
		[
			{path: '', component: ServicesComponent},
			{path: 'activity', canActivate: [],
				children:
				[
					{
						path: '',
		                loadChildren: '../activity/activity.module#ActivityModule',
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
			{path: 'service-detail-activity', canActivate: [],
				children:
				[
					{
						path: '',
		                loadChildren: './service-detail-activity/service-detail-activity.module#ServiceDetailActivityModule',
					}
				]
			},
			{path: 'service-detail-politic', canActivate: [],
				children:
				[
					{
						path: '',
		                loadChildren: './service-detail-politic/service-detail-politic.module#ServiceDetailPoliticModule',
					}
				]
			},
			{path: 'service-detail-resource', canActivate: [],
				children:
				[
					{
						path: '',
		                loadChildren: './service-detail-resource/service-detail-resource.module#ServiceDetailResourceModule',
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
