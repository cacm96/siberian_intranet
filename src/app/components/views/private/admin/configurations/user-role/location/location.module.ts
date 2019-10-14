import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../../../../../../core/ui/material.module';
import { LocationRoutingModule } from './location-routing.module';
import { LocationComponent } from './location.component';
import { LocationsComponent } from './locations/locations.component';
import { LocationCreateComponent } from './location-create/location-create.component';
import { LocationEditComponent } from './location-edit/location-edit.component';
import { LocationShowComponent } from './location-show/location-show.component';
import { LocationDeleteComponent } from './location-delete/location-delete.component';

@NgModule({
  declarations: [
	LocationComponent,
	LocationsComponent,
	LocationCreateComponent,
	LocationEditComponent,
	LocationShowComponent,
	LocationDeleteComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    LocationRoutingModule
  ]
})
export class LocationModule { }
