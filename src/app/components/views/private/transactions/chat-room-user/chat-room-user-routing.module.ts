import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ChatRoomUserComponent } from './chat-room-user.component';
import { ChatRoomUsersComponent } from './chat-room-users/chat-room-users.component';
import { ChatRoomUserCreateComponent } from './chat-room-user-create/chat-room-user-create.component';
import { ChatRoomUserEditComponent } from './chat-room-user-edit/chat-room-user-edit.component';
import { ChatRoomUserShowComponent } from './chat-room-user-show/chat-room-user-show.component';
import { ChatRoomUserDeleteComponent } from './chat-room-user-delete/chat-room-user-delete.component';

const routes: Routes = [

	{path: '', component: ChatRoomUserComponent, canActivate: [],
		children:
		[
			{path: '', component: ChatRoomUsersComponent},
			{path: 'create', component: ChatRoomUserCreateComponent},
			{path: 'edit/:id', component: ChatRoomUserEditComponent},
			{path: 'show/:id', component: ChatRoomUserShowComponent},
			{path: 'delete/:id', component: ChatRoomUserDeleteComponent}
		]
	},

];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]

})
export class ChatRoomUserRoutingModule { }
