import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { Global } from '../../../../../../core/services/global'
import { User } from '../../../../../../models/user';
import { UserService } from '../../../../../../core/services/admin/user.service';


@Component({
  selector: 'sib-profile-show',
  templateUrl: './profile-show.component.html',
  styleUrls: ['./profile-show.component.scss']
})
export class ProfileShowComponent implements OnInit {

	public user: any;
	public failedConect:string;
	public message:string;
	public userID:string;

	constructor
	(
		private _userService: UserService,
		private _route: ActivatedRoute,
		private _router: Router,
	){}

	ngOnInit()
	{
		this._route.params.subscribe
		(
			params =>
			{
				let id = params.id;
				this.userID = id;
				this.getUser(id)
			}
		);
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