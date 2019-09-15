import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { Global } from '../../../../../../../../core/services/global';
import { User } from '../../../../../../../../models/user';
import { UserService } from '../../../../../../../../core/services/admin/user.service';
import { LocationService } from '../../../../../../../../core/services/admin/location.service';
import { Phone } from '../../../../../../../../models/phone';
import { PhoneService } from '../../../../../../../../core/services/admin/phone.service';
import { SnackBarService } from '../../../../../../../../core/services/snack-bar.service';
import { Location } from '@angular/common';

@Component({
  selector: 'sib-user-show',
  templateUrl: './user-show.component.html',
  styleUrls: ['./user-show.component.scss']
})
export class UserShowComponent implements OnInit {

	public user: any;
	public locationsUser:any;
	public phonesUser:any;
	public failedConect:string;
	public message:string;

	constructor
	(
		private _userService: UserService,
		public _locationService: LocationService,
		public _phoneService: PhoneService,
		private _route: ActivatedRoute,
		private _router: Router,
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
				this.getUser(id);
				this.getLocationsUser(id)
				this.getPhonesUser(id)
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

	getLocationsUser(id)
	{
		this._locationService.AllLocationUser(id).subscribe
		(
			response =>
			{
				this.locationsUser = response.locations;
				console.log(this.locationsUser);
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

	getPhonesUser(id)
	{
		this._phoneService.AllPhoneUser(id).subscribe
		(
			response =>
			{
				this.phonesUser = response.phones;
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
