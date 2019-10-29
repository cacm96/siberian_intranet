import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { CatalogComponent } from './catalog.component';
import { CatalogsComponent } from './catalogs/catalogs.component';

const routes: Routes = [

	{path: '', component: CatalogComponent, canActivate: [],
		children:
		[
			{path: '', component: CatalogsComponent},
			{path: 'category', canActivate: [],
				children:
				[
					{
						path: '',
		                loadChildren: './category/category.module#CategoryModule',
					}
				]
			},
			{path: 'sub-category', canActivate: [],
				children:
				[
					{
						path: '',
		                loadChildren: './sub-category/sub-category.module#SubCategoryModule',
					}
				]
			},
			
		]
	},	

];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]

})
export class CatalogRoutingModule { }
