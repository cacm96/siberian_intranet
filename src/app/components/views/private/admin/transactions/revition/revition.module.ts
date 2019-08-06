import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../../../../../core/ui/material.module';
import { RevitionRoutingModule } from './revition-routing.module';
import { RevitionComponent } from './revition.component';
import { RevitionsComponent } from './revitions/revitions.component';
import { RevitionCreateComponent } from './revition-create/revition-create.component';
import { RevitionEditComponent } from './revition-edit/revition-edit.component';
import { RevitionShowComponent } from './revition-show/revition-show.component';
import { RevitionDeleteComponent } from './revition-delete/revition-delete.component';

@NgModule({
  declarations: [
	RevitionComponent,
	RevitionsComponent,
	RevitionCreateComponent,
	RevitionEditComponent,
	RevitionShowComponent,
	RevitionDeleteComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RevitionRoutingModule
  ]
})
export class RevitionModule { }
