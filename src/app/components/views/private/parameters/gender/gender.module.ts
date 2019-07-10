import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../../../../core/ui/material.module';
import { GenderRoutingModule } from './gender-routing.module';
import { GenderComponent } from './gender.component';
import { GendersComponent } from './genders/genders.component';
import { GenderCreateComponent } from './gender-create/gender-create.component';
import { GenderEditComponent } from './gender-edit/gender-edit.component';
import { GenderShowComponent } from './gender-show/gender-show.component';
import { GenderDeleteComponent } from './gender-delete/gender-delete.component';

@NgModule({
  declarations: [
	GenderComponent,
	GendersComponent,
	GenderCreateComponent,
	GenderEditComponent,
	GenderShowComponent,
	GenderDeleteComponent
  ],
  imports: [
    MaterialModule,
    GenderRoutingModule
  ]
})
export class GenderModule { }
