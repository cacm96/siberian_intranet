import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import {Location} from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { Global } from '../../../../../../../../core/services/global';
import { Motive } from '../../../../../../../../models/motive';
import { MotiveService } from '../../../../../../../../core/services/admin/motive.service';
import { SnackBarService } from '../../../../../../../../core/services/snack-bar.service';

@Component({
  selector: 'sib-motive-show',
  templateUrl: './motive-show.component.html',
  styleUrls: ['./motive-show.component.scss']
})
export class MotiveShowComponent implements OnInit {

	public motive:Motive;
	public subcategories:any;
	public message:string;
  	public failedConect:string;

	constructor
	(
		private _motiveService: MotiveService,
		private _route: ActivatedRoute,
		private _router: Router,
		private _location: Location,
    	private snackBar: SnackBarService
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
				this.getMotive(id);
			}
		);
	}

	getMotive(id)
	{
		this._motiveService.getOne(id).subscribe
		(
			response =>
			{
				this.motive = response.motive;
				console.log(this.motive);
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

