import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../../../../core/ui/material.module';
import { SubCategoryRoutingModule } from './sub-category-routing.module';
import { SubCategoryComponent } from './sub-category.component';
import { SubCategoriesComponent } from './sub-categories/sub-categories.component';
import { SubCategoryCreateComponent } from './sub-category-create/sub-category-create.component';
import { SubCategoryEditComponent } from './sub-category-edit/sub-category-edit.component';
import { SubCategoryShowComponent } from './sub-category-show/sub-category-show.component';
import { SubCategoryDeleteComponent } from './sub-category-delete/sub-category-delete.component';

@NgModule({
  declarations: [
	SubCategoryComponent,
	SubCategoriesComponent,
	SubCategoryCreateComponent,
	SubCategoryEditComponent,
	SubCategoryShowComponent,
	SubCategoryDeleteComponent
  ],
  imports: [
    MaterialModule,
    SubCategoryRoutingModule
  ]
})
export class SubCategoryModule { }
