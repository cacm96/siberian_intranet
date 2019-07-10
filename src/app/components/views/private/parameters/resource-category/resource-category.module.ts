import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../../../../core/ui/material.module';
import { ResourceCategoryRoutingModule } from './resource-category-routing.module';
import { ResourceCategoryComponent } from './resource-category.component';
import { ResourceCategoriesComponent } from './resource-categories/resource-categories.component';
import { ResourceCategoryCreateComponent } from './resource-category-create/resource-category-create.component';
import { ResourceCategoryEditComponent } from './resource-category-edit/resource-category-edit.component';
import { ResourceCategoryShowComponent } from './resource-category-show/resource-category-show.component';
import { ResourceCategoryDeleteComponent } from './resource-category-delete/resource-category-delete.component';

@NgModule({
  declarations: [
	ResourceCategoryComponent,
	ResourceCategoriesComponent,
	ResourceCategoryCreateComponent,
	ResourceCategoryEditComponent,
	ResourceCategoryShowComponent,
	ResourceCategoryDeleteComponent
  ],
  imports: [
    MaterialModule,
    ResourceCategoryRoutingModule
  ]
})
export class ResourceCategoryModule { }
