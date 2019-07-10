import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ResourceCategoryComponent } from './resource-category.component';
import { ResourceCategoriesComponent } from './resource-categories/resource-categories.component';
import { ResourceCategoryCreateComponent } from './resource-category-create/resource-category-create.component';
import { ResourceCategoryEditComponent } from './resource-category-edit/resource-category-edit.component';
import { ResourceCategoryShowComponent } from './resource-category-show/resource-category-show.component';
import { ResourceCategoryDeleteComponent } from './resource-category-delete/resource-category-delete.component';


const routes: Routes = [

	{path: '', component: ResourceCategoryComponent, canActivate: [],
		children:
		[
			{path: '', component: ResourceCategoriesComponent},
			{path: 'create', component: ResourceCategoryCreateComponent},
			{path: 'edit/:id', component: ResourceCategoryEditComponent},
			{path: 'show/:id', component: ResourceCategoryShowComponent},
			{path: 'delete/:id', component: ResourceCategoryDeleteComponent}
		]
	},

];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]

})
export class ResourceCategoryRoutingModule { }
