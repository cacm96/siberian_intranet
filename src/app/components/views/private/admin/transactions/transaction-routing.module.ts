import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { TransactionComponent } from './transaction.component';

const routes: Routes = [

	{path: '', component: TransactionComponent, canActivate: []},
	{path: 'calendar-worker', canActivate: [],
		children:
		[
			{
				path: '',
                loadChildren: './calendar-worker/calendar-worker.module#CalendarWorkerModule',
			}
		]
	},
	{path: 'calification', canActivate: [],
		children:
		[
			{
				path: '',
                loadChildren: './calification/calification.module#CalificationModule',
			}
		]
	},
	{path: 'chat-room', canActivate: [],
		children:
		[
			{
				path: '',
                loadChildren: './chat-room/chat-room.module#ChatRoomModule',
			}
		]
	},
	{path: 'chat-room-user', canActivate: [],
		children:
		[
			{
				path: '',
                loadChildren: './chat-room-user/chat-room-user.module#ChatRoomUserModule',
			}
		]
	},
	{path: 'incidence', canActivate: [],
		children:
		[
			{
				path: '',
                loadChildren: './incidence/incidence.module#IncidenceModule',
			}
		]
	},
	{path: 'message', canActivate: [],
		children:
		[
			{
				path: '',
                loadChildren: './message/message.module#MessageModule',
			}
		]
	},
	{path: 'notification', canActivate: [],
		children:
		[
			{
				path: '',
                loadChildren: './notification/notification.module#NotificationModule',
			}
		]
	},
	{path: 'request', canActivate: [],
		children:
		[
			{
				path: '',
                loadChildren: './request/request.module#RequestModule',
			}
		]
	},
	{path: 'revition', canActivate: [],
		children:
		[
			{
				path: '',
                loadChildren: './revition/revition.module#RevitionModule',
			}
		]
	},
	{path: 'service-order', canActivate: [],
		children:
		[
			{
				path: '',
                loadChildren: './service-order/service-order.module#ServiceOrderModule',
			}
		]
	},
	{path: 'service-order-detail', canActivate: [],
		children:
		[
			{
				path: '',
                loadChildren: './service-order-detail/service-order-detail.module#ServiceOrderDetailModule',
			}
		]
	},

];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]

})
export class TransactionRoutingModule { }
