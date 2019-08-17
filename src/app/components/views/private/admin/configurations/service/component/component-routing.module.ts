import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ComponentComponent } from './component.component';
import { ComponentsComponent } from './components/components.component';
import { ComponentCreateComponent } from './component-create/component-create.component';
import { ComponentEditComponent } from './component-edit/component-edit.component';
import { ComponentShowComponent } from './component-show/component-show.component';
import { ComponentDeleteComponent } from './component-delete/component-delete.component';

const routes: Routes = [

	{path: '', component: ComponentComponent, canActivate: [],
		children:
		[
			{path: '', component: ComponentsComponent},
			{path: 'create', component: ComponentCreateComponent},
			{path: 'edit/:id', component: ComponentEditComponent},
			{path: 'show/:id', component: ComponentShowComponent},
			{path: 'delete/:id', component: ComponentDeleteComponent}
		]
	},

];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]

})
export class ComponentRoutingModule { }
