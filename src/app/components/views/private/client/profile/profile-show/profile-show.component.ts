import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import {Location} from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { Global } from '../../../../../../core/services/global'
import { User } from '../../../../../../models/user';
import { UserService } from '../../../../../../core/services/admin/user.service';
import { LocationService } from '../../../../../../core/services/admin/location.service';
import { PhoneService } from '../../../../../../core/services/admin/phone.service';
import { SnackBarService } from '../../../../../../core/services/snack-bar.service';
import { DialogService } from '../../../../../../core/services/dialog.service';


@Component({
  selector: 'sib-profile-show',
  templateUrl: './profile-show.component.html',
  styleUrls: ['./profile-show.component.scss']
})
export class ProfileShowComponent implements OnInit {

	public user: any;
	public locationsUser:any;
	public phonesUser:any;
	public failedConect:string;
	public message:string;
	public userID:string;

	constructor
	(
		private _userService: UserService,
		public _locationService: LocationService,
		public _phoneService: PhoneService,
		private _route: ActivatedRoute,
		private _router: Router,
		private _location: Location,
    	private snackBar: SnackBarService,
    	private dialogService: DialogService,
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
				this.userID = id;
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
				console.log(this.phonesUser);
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

	onDeleteLocation(id){
		this.dialogService.openConfirmDialog('¿Estás seguro de eliminar esta direccón?').afterClosed().subscribe
		(
			response =>
			{
				if (response==true)
				{
					this.deleteLocation(id);
				}else
				{
					console.log(response);
				}
			}
		);
	}

	deleteLocation(id)
	{
		this._locationService.deleteOne(id).subscribe
		(
			response =>
			{
				console.log(response);
	            this.message = response.message.text;
	            this.snackBar.openSnackBarSuccess(this.message);
	            this.getLocationsUser(this.userID);
			},
			error =>
			{
				console.log(<any>error);
			}
		)
	}

	onDeletePhone(id){
		this.dialogService.openConfirmDialog('¿Estás seguro de eliminar esta direccón?').afterClosed().subscribe
		(
			response =>
			{
				if (response==true)
				{
					this.deletePhone(id);
				}else
				{
					console.log(response);
				}
			}
		);
	}

	deletePhone(id)
	{
		this._phoneService.deleteOne(id).subscribe
		(
			response =>
			{
				console.log(response);
	            this.message = response.message.text;
	            this.snackBar.openSnackBarSuccess(this.message);
	            this.getPhonesUser(this.userID);
			},
			error =>
			{
				console.log(<any>error);
			}
		)
	}

}
