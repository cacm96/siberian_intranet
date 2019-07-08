import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ConfigurationComponent } from './configuration.component';


const routes: Routes = [

	{path: '', component: ConfigurationComponent, canActivate: []},
	/*{path: 'parameter-client', canActivate: [],
		children:
		[
			{
				path: '',
                loadChildren: './components/views/private/parameter-client/parameter-client.module#ParameterClientModule',
			}
		]
	},
	{path: 'phone', canActivate: [],
		children:
		[
			{
				path: '',
                loadChildren: './components/views/private/phone/phone.module#PhoneModule',
			}
		]
	},
	{path: 'user-role', canActivate: [],
		children:
		[
			{
				path: '',
                loadChildren: './components/views/private/user-role/user-role.module#UserRoleModule',
			}
		]
	},*/

];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]

})

export class ConfigurationRoutingModule { }
