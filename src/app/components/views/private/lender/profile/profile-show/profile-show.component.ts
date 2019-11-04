import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { Global } from 'src/app/core/services/global'
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/core/services/admin/user.service';

@Component({
  selector: 'sib-profile-show',
  templateUrl: './profile-show.component.html',
  styleUrls: ['./profile-show.component.scss']
})
export class ProfileShowComponent implements OnInit {

	public lender: any;
	public skills:any;
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
				this.getLender(id)
			}
		);
	}

	getLender(id)
	{
		this._userService.getOneLender(id).subscribe
		(
			response =>
			{
				this.lender = response.lender;
				this.skills = this.lender.skills;
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
