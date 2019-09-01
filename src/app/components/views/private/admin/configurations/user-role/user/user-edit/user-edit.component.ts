import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { Global } from '../../../../../../../../core/services/global';
import { User } from '../../../../../../../../models/user';
import { UserService } from '../../../../../../../../core/services/admin/user.service';
import { Role } from '../../../../../../../../models/role';
import { RoleService } from '../../../../../../../../core/services/admin/role.service';
import { Location } from '../../../../../../../../models/location';
import { LocationService } from '../../../../../../../../core/services/admin/location.service';
import { SnackBarService } from '../../../../../../../../core/services/snack-bar.service';

@Component({
  selector: 'sib-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.scss']
})
export class UserEditComponent implements OnInit {

	public user: any;
	public locations:Location;
	public locationsCant:Number;
	public roles:Role;
	public dniTypes:any[];
	public updateUser:any;
	public failedConect:string;
	public message:string;

	constructor
	(
		private _userService: UserService,
		private _roleService: RoleService,
		private _locationService: LocationService,
		private _route: ActivatedRoute,
		private _router: Router,
    	private snackBar: SnackBarService
	)
	{
		this.dniTypes= [
	      {id:"v",name:"Venezolano"},
	      {id:"e",name:"Extranjero"},
	    ];

	}

	ngOnInit()
	{
		this._route.params.subscribe
		(
			params =>
			{
				let id = params.id;
				this.getUser(id);
			}
		);
		this.getRoles();
	}

	getRoles()
	{
		this._roleService.All().subscribe
		(
			response =>
			{
				this.roles = response.roles;
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

	getUser(id)
	{
		this._userService.getOne(id).subscribe
		(
			response =>
			{
				this.user = response;
				this.user = this.user.user;
				this.locationsCant = this.user.locations.length;
				console.log(this.user);
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

	update(form: NgForm)
	{
		if(form.valid)
		{
			/*console.log(this.locationsCant);
			if ( this.locationsCant<=0)
			{
				console.log("primera vez");
				this.locations = new Location();
				console.log(this.locations);
				this.locations.address = form.value.address;
				this.locations.state = form.value.state;
				this.locations.city = form.value.city;
				this.locations.postalCode = form.value.postalCode;
				this.locations.isLivingPlace = true;
				this.locations.UserId = this.user.id;
				this.user.locations.push(this.locations);
			}
	    	else
	    	{
	    		console.log("ya tiene direcciones");
	    	}*/

	    	console.log(this.user);
			
			this._userService.update(this.user).subscribe
			(
				response =>
				{
					if(response.status==true)
					{
						this.updateUser = response.user;
						
						if(this.user.role.id != form.value.role)
				    	{
				    		this.chanRoleUser(this.user.id,form.value.role);
				    	}
						
						this.getUser(this.user.id);
						console.log(this.updateUser);
						this.message  = response.message.text;
						this.snackBar.openSnackBar(this.message,'');
					}
					else
					{
						this.message  = response.message.text;
						this.snackBar.openSnackBar(this.message,'');
					}
				},
				error =>
				{
					console.log(error);
					this.message  = error.error.message;
					this.snackBar.openSnackBar(this.message,'');
				}
			);
		}else
		{
		}
		
	}

	chanRoleUser(uid,rid)
	{
		this._userService.changeRole(uid,rid).subscribe
		(
			response =>
			{
				console.log(response);
		        this.message = response.message.text;
		        this.snackBar.openSnackBarSuccess(this.message);
			},
			error =>
			{
				console.log(<any>error);
			}
		);
	}

}
