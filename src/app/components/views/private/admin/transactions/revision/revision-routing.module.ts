import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { RevisionComponent } from './revision.component';
import { RevisionsComponent } from './revisions/revisions.component';
import { RevisionCreateComponent } from './revision-create/revision-create.component';
import { RevisionEditComponent } from './revision-edit/revision-edit.component';
import { RevisionShowComponent } from './revision-show/revision-show.component';
import { RevisionDeleteComponent } from './revision-delete/revision-delete.component';

const routes: Routes = [

	{path: '', component: RevisionComponent, canActivate: [],
		children:
		[
			{path: '', component: RevisionsComponent},
			{path: 'create', component: RevisionCreateComponent},
			{path: 'edit/:id', component: RevisionEditComponent},
			{path: 'show/:id', component: RevisionShowComponent},
			{path: 'delete/:id', component: RevisionDeleteComponent}
		]
	},

];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]

})

export class RevisionRoutingModule { }
