import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ParameterComponent } from './parameter.component';


const routes: Routes = [

	{path: '', component: ParameterComponent, canActivate: []},
	{path: 'dni-type', canActivate: [],
		children:
		[
			{
				path: '',
                loadChildren: './dni-type/dni-type.module#DniTypeModule',
			}
		]
	},
	{path: 'gender', canActivate: [],
		children:
		[
			{
				path: '',
                loadChildren: './gender/gender.module#GenderModule',
			}
		]
	},
	{path: 'payment-form', canActivate: [],
		children:
		[
			{
				path: '',
                loadChildren: './payment-form/payment-form.module#PaymentFormModule',
			}
		]
	},
	{path: 'payment-type', canActivate: [],
		children:
		[
			{
				path: '',
                loadChildren: './payment-type/payment-type.module#PaymentTypeModule',
			}
		]
	},
	{path: 'phone-type', canActivate: [],
		children:
		[
			{
				path: '',
                loadChildren: './phone-type/phone-type.module#PhoneTypeModule',
			}
		]
	},
	{path: 'resource-category', canActivate: [],
		children:
		[
			{
				path: '',
                loadChildren: './resource-category/resource-category.module#ResourceCategoryModule',
			}
		]
	},
	{path: 'resource-type', canActivate: [],
		children:
		[
			{
				path: '',
                loadChildren: './resource-type/resource-type.module#ResourceTypeModule',
			}
		]
	},
	{path: 'service-type', canActivate: [],
		children:
		[
			{
				path: '',
                loadChildren: './service-type/service-type.module#ServiceTypeModule',
			}
		]
	},
	{path: 'worker-type', canActivate: [],
		children:
		[
			{
				path: '',
                loadChildren: './worker-type/worker-type.module#WorkerTypeModule',
			}
		]
	},


];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]

})

export class ParameterRoutingModule { }
