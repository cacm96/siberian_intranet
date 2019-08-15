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
			{path: 'catalogue', canActivate: [],
				children:
				[
					{
						path: '',
		                loadChildren: './catalogue/catalogue.module#CatalogueModule',
					}
				]
			},
			{path: 'catalogue-variety-detail', canActivate: [],
				children:
				[
					{
						path: '',
		                loadChildren: './catalogue-variety-detail/catalogue-variety-detail.module#CatalogueVarietyDetailModule',
					}
				]
			},
			{path: 'category', canActivate: [],
				children:
				[
					{
						path: '',
		                loadChildren: './category/category.module#CategoryModule',
					}
				]
			},
			{path: 'service-detail-catalogue-variety-detail', canActivate: [],
				children:
				[
					{
						path: '',
		                loadChildren: './service-detail-catalogue-variety-detail/service-detail-catalogue-variety-detail.module#ServiceDetailCatalogueVarietyDetailModule',
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
