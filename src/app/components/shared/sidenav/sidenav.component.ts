import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../core/services/public/auth.service';
import { UserService } from '../../../core/services/admin/user.service';
import { Global } from '../../..//core/services/global';

import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'sib-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

	public role:string;
	public user:any;
	public failedConect:string;


	constructor
	(
		private _authService: AuthService,
		private _userService: UserService,
	)
	{ }

	ngOnInit()
	{
		let id = this._authService.getID();
		this.getUser(id);
		this.role=this._authService.getRole();
	}

	getUser(id)
	{
		this._userService.getOne(id).subscribe
		(
			response =>
			{
				this.user = response;
				this.user = this.user.user;
			},
			error =>
			{
				console.log(<any>error);
				if(error instanceof HttpErrorResponse)
				{
					if(error.status===0)
					{
						this.failedConect = Global.failed;
					}
				}
			}
		)
	}

}
