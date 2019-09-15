import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import {Location} from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { Global } from '../../../../../../../../core/services/global';
import { Role } from '../../../../../../../../models/role';
import { RoleService } from '../../../../../../../../core/services/admin/role.service';
import { SnackBarService } from '../../../../../../../../core/services/snack-bar.service';
import { Location } from '@angular/common';

@Component({
  selector: 'sib-role-show',
  templateUrl: './role-show.component.html',
  styleUrls: ['./role-show.component.scss']
})
export class RoleShowComponent implements OnInit {

	public role:Role;
	public message:string;
  	public failedConect:string;

	constructor
	(
		private _roleService: RoleService,
		private _route: ActivatedRoute,
		private _router: Router,
		private _location: Location,
		private snackBar: SnackBarService,
		private _location: Location,
    )
    {

    }

	ngOnInit()
	{
		this._route.params.subscribe
		(
			params =>
			{
				let id = params.id;
				this.getRole(id);
			}
		);
	}

	getRole(id)
	{
		this._roleService.getOne(id).subscribe
		(
			response =>
			{
				this.role = response.role;
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

	goBack(){
		this._location.back();
	  }

}
