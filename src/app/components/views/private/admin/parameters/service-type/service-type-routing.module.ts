import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ServiceTypeComponent } from './service-type.component';
import { ServiceTypesComponent } from './service-types/service-types.component';
import { ServiceTypeCreateComponent } from './service-type-create/service-type-create.component';
import { ServiceTypeEditComponent } from './service-type-edit/service-type-edit.component';
import { ServiceTypeShowComponent } from './service-type-show/service-type-show.component';
import { ServiceTypeDeleteComponent } from './service-type-delete/service-type-delete.component';

const routes: Routes = [

	{path: '', component: ServiceTypeComponent, canActivate: [],
		children:
		[
			{path: '', component: ServiceTypesComponent},
			{path: 'create', component: ServiceTypeCreateComponent},
			{path: 'edit/:id', component: ServiceTypeEditComponent},
			{path: 'show/:id', component: ServiceTypeShowComponent},
			{path: 'delete/:id', component: ServiceTypeDeleteComponent}
		]
	},

];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]

})
export class ServiceTypeRoutingModule { }
