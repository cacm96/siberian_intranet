import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { DniTypeComponent } from './dni-type.component';
import { DniTypesComponent } from './dni-types/dni-types.component';
import { DniTypeCreateComponent } from './dni-type-create/dni-type-create.component';
import { DniTypeEditComponent } from './dni-type-edit/dni-type-edit.component';
import { DniTypeShowComponent } from './dni-type-show/dni-type-show.component';
import { DniTypeDeleteComponent } from './dni-type-delete/dni-type-delete.component';

const routes: Routes = [

	{path: '', component: DniTypeComponent, canActivate: [],
		children:
		[
			{path: '', component: DniTypesComponent},
			{path: 'create', component: DniTypeCreateComponent},
			{path: 'edit/:id', component: DniTypeEditComponent},
			{path: 'show/:id', component: DniTypeShowComponent},
			{path: 'delete/:id', component: DniTypeDeleteComponent}
		]
	},

];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]

})
export class DniTypeRoutingModule { }
