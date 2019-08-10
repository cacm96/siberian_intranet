import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { CatalogComponent } from './catalog.component';
import { CatalogsComponent } from './catalogs/catalogs.component';
import { VarietyComponent } from './variety/variety.component';
import { VarietyDetailComponent } from './variety-detail/variety-detail.component';
import { VarietyDetailsComponent } from './variety-details/variety-details.component';
import { OthersComponent } from './others/others.component';
import { CategoriaComponent } from './categoria/categoria.component';
import { SubcategoriaComponent } from './subcategoria/subcategoria.component';


const routes: Routes = [

	{path: '', component: CatalogComponent, canActivate: [],
		children:
		[
			{path: '', component: CategoriaComponent},
			{path: 'subcategoria', component: SubcategoriaComponent, canActivate: []},
			{path: 'catalogs', component: CatalogsComponent},
			{path: 'variety', component: VarietyComponent, canActivate: []},
			{path: 'variety-detail/:id', component: VarietyDetailComponent, canActivate: []},
			{path: 'variety-detail', component: VarietyDetailsComponent, canActivate: []},
			{path: 'others', component: OthersComponent, canActivate: []},
		]
	},	

];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]

})
export class CatalogRoutingModule { }
