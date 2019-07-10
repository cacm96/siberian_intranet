import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ResourceTypeComponent } from './resource-type.component';
import { ResourceTypesComponent } from './resource-types/resource-types.component';
import { ResourceTypeCreateComponent } from './resource-type-create/resource-type-create.component';
import { ResourceTypeEditComponent } from './resource-type-edit/resource-type-edit.component';
import { ResourceTypeShowComponent } from './resource-type-show/resource-type-show.component';
import { ResourceTypeDeleteComponent } from './resource-type-delete/resource-type-delete.component';

const routes: Routes = [

	{path: '', component: ResourceTypeComponent, canActivate: [],
		children:
		[
			{path: '', component: ResourceTypesComponent},
			{path: 'create', component: ResourceTypeCreateComponent},
			{path: 'edit/:id', component: ResourceTypeEditComponent},
			{path: 'show/:id', component: ResourceTypeShowComponent},
			{path: 'delete/:id', component: ResourceTypeDeleteComponent}
		]
	},

];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]

})
export class ResourceTypeRoutingModule { }
