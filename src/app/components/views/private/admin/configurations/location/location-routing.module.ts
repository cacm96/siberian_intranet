import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LocationComponent } from './location.component';
import { LocationsComponent } from './locations/locations.component';
import { LocationCreateComponent } from './location-create/location-create.component';
import { LocationEditComponent } from './location-edit/location-edit.component';
import { LocationShowComponent } from './location-show/location-show.component';
import { LocationDeleteComponent } from './location-delete/location-delete.component';

const routes: Routes = [

	{path: '', component: LocationComponent, canActivate: [],
		children:
		[
			{path: '', component: LocationsComponent},
			{path: 'create', component: LocationCreateComponent},
			{path: 'edit/:id', component: LocationEditComponent},
			{path: 'show/:id', component: LocationShowComponent},
			{path: 'delete/:id', component: LocationDeleteComponent}
		]
	},

];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]

})
export class LocationRoutingModule { }
