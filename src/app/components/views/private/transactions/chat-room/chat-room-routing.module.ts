import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ChatRoomComponent } from './chat-room.component';
import { ChatRoomsComponent } from './chat-rooms/chat-rooms.component';
import { ChatRoomCreateComponent } from './chat-room-create/chat-room-create.component';
import { ChatRoomEditComponent } from './chat-room-edit/chat-room-edit.component';
import { ChatRoomShowComponent } from './chat-room-show/chat-room-show.component';
import { ChatRoomDeleteComponent } from './chat-room-delete/chat-room-delete.component';

const routes: Routes = [

	{path: '', component: ChatRoomComponent, canActivate: [],
		children:
		[
			{path: '', component: ChatRoomsComponent},
			{path: 'create', component: ChatRoomCreateComponent},
			{path: 'edit/:id', component: ChatRoomEditComponent},
			{path: 'show/:id', component: ChatRoomShowComponent},
			{path: 'delete/:id', component: ChatRoomDeleteComponent}
		]
	},

];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]

})
export class ChatRoomRoutingModule { }
