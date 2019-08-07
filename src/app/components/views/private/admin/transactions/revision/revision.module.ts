import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../../../../../core/ui/material.module';
import { RevisionRoutingModule } from './revision-routing.module';
import { RevisionComponent } from './revision.component';
import { RevisionsComponent } from './revisions/revisions.component';
import { RevisionCreateComponent } from './revision-create/revision-create.component';
import { RevisionEditComponent } from './revision-edit/revision-edit.component';
import { RevisionShowComponent } from './revision-show/revision-show.component';
import { RevisionDeleteComponent } from './revision-delete/revision-delete.component';

@NgModule({
  declarations: [
	RevisionComponent,
	RevisionsComponent,
	RevisionCreateComponent,
	RevisionEditComponent,
	RevisionShowComponent,
	RevisionDeleteComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RevisionRoutingModule
  ]
})
export class RevisionModule { }
