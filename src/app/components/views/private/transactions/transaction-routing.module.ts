import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { TransactionComponent } from './transaction.component';

const routes: Routes = [

	{path: '', component: TransactionComponent, canActivate: []},
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

];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]

})
export class TransactionRoutingModule { }
