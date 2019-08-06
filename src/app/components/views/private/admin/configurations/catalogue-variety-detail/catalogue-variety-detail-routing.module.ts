import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { CatalogueVarietyDetailComponent } from './catalogue-variety-detail.component';
import { CatalogueVarietyDetailsComponent } from './catalogue-variety-details/catalogue-variety-details.component';
import { CatalogueVarietyDetailCreateComponent } from './catalogue-variety-detail-create/catalogue-variety-detail-create.component';
import { CatalogueVarietyDetailEditComponent } from './catalogue-variety-detail-edit/catalogue-variety-detail-edit.component';
import { CatalogueVarietyDetailShowComponent } from './catalogue-variety-detail-show/catalogue-variety-detail-show.component';
import { CatalogueVarietyDetailDeleteComponent } from './catalogue-variety-detail-delete/catalogue-variety-detail-delete.component';

const routes: Routes = [

	{path: '', component: CatalogueVarietyDetailComponent, canActivate: [],
		children:
		[
			{path: '', component: CatalogueVarietyDetailsComponent},
			{path: 'create', component: CatalogueVarietyDetailCreateComponent},
			{path: 'edit/:id', component: CatalogueVarietyDetailEditComponent},
			{path: 'show/:id', component: CatalogueVarietyDetailShowComponent},
			{path: 'delete/:id', component: CatalogueVarietyDetailDeleteComponent}
		]
	},

];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]

})
export class CatalogueVarietyDetailRoutingModule { }
