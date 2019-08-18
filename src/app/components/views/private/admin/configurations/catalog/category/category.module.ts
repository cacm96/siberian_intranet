import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../../../../../../core/ui/material.module';
import { CategoryRoutingModule } from './category-routing.module';
import { CategoryComponent } from './category.component';
import { CategoriesComponent } from './categories/categories.component';
import { CategoryCreateComponent } from './category-create/category-create.component';
import { CategoryEditComponent } from './category-edit/category-edit.component';
import { CategoryShowComponent } from './category-show/category-show.component';
import { CategoryDeleteComponent } from './category-delete/category-delete.component';

@NgModule({
  declarations: [
  	CategoryComponent,
  	CategoriesComponent,
  	CategoryCreateComponent,
  	CategoryEditComponent,
  	CategoryShowComponent,
  	CategoryDeleteComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    CategoryRoutingModule
  ]
})
export class CategoryModule { }
