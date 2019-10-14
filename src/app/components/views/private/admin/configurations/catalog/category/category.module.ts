import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../../../../../../core/ui/material.module';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CategoryService } from 'src/app/core/services/admin/category.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptorService } from 'src/app/core/services/token-interceptor.service';

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
    FormsModule,
    CategoryRoutingModule
  ],
  providers:
  [
    CategoryService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass : TokenInterceptorService,
      multi: true
    },
  ],
})
export class CategoryModule { }
