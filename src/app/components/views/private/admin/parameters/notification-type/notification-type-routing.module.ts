import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { NotificationTypeComponent } from './notification-type.component';
import { NotificationTypesComponent } from './notification-types/notification-types.component';
import { NotificationTypeCreateComponent } from './notification-type-create/notification-type-create.component';
import { NotificationTypeEditComponent } from './notification-type-edit/notification-type-edit.component';
import { NotificationTypeShowComponent } from './notification-type-show/notification-type-show.component';
import { NotificationTypeDeleteComponent } from './notification-type-delete/notification-type-delete.component';

const routes: Routes = [

	{path: '', component: NotificationTypeComponent, canActivate: [],
		children:
		[
			{path: '', component: NotificationTypesComponent},
			{path: 'create', component: NotificationTypeCreateComponent},
			{path: 'edit/:id', component: NotificationTypeEditComponent},
			{path: 'show/:id', component: NotificationTypeShowComponent},
			{path: 'delete/:id', component: NotificationTypeDeleteComponent}
		]
	},

];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]

})
export class NotificationTypeRoutingModule { }
