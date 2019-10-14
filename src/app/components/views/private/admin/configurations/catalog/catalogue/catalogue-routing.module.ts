import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { CatalogueComponent } from './catalogue.component';
import { CatalogsComponent } from './catalogs/catalogs.component';
import { CatalogueCreateComponent } from './catalogue-create/catalogue-create.component';
import { CatalogueEditComponent } from './catalogue-edit/catalogue-edit.component';
import { CatalogueShowComponent } from './catalogue-show/catalogue-show.component';
import { CatalogueDeleteComponent } from './catalogue-delete/catalogue-delete.component';

const routes: Routes = [

	{path: '', component: CatalogueComponent, canActivate: [],
		children:
		[
			{path: '', component: CatalogsComponent},
			{path: 'create', component: CatalogueCreateComponent},
			{path: 'edit/:id', component: CatalogueEditComponent},
			{path: 'show/:id', component: CatalogueShowComponent},
			{path: 'delete/:id', component: CatalogueDeleteComponent}
		]
	},

];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]

})
export class CatalogueRoutingModule { }
