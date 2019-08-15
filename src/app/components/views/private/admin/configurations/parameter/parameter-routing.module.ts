import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ParameterComponent } from './parameter.component';
import { ParametersComponent } from './parameters/parameters.component';
import { ParameterClientComponent } from './parameter-client/parameter-client.component';

const routes: Routes = [

	{path: '', component: ParameterComponent, canActivate: [],
		children:
		[
			{path: '', component: ParametersComponent},
			{path: 'parameter', canActivate: [],
				children:
				[
					{
						path: '',
		                loadChildren: './parameter/parameter.module#ParameterModule',
					}
				]
			},
			{path: 'parameter-client', canActivate: [],
				children:
				[
					{
						path: '',
		                loadChildren: './parameter-client/parameter-client.module#ParameterClientModule',
					}
				]
			},
			
		]
	},	

];

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})

export class ParameterRoutingModule { }
