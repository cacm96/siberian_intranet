import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import {Location} from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { Global } from '../../../../../../../../core/services/global'
import { Resource } from '../../../../../../../../models/resource';
import { ResourceService } from '../../../../../../../../core/services/admin/resource.service';
import { SnackBarService } from '../../../../../../../../core/services/snack-bar.service';

@Component({
  selector: 'sib-resource-show',
  templateUrl: './resource-show.component.html',
  styleUrls: ['./resource-show.component.scss']
})
export class ResourceShowComponent implements OnInit {

	public resource:Resource;
	public message:string;
  	public failedConect:string;

	constructor
	(
		private _resourceService: ResourceService,
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
				this.getResource(id);
			}
		);
	}

	getResource(id)
	{
		this._resourceService.getOne(id).subscribe
		(
			response =>
			{
				this.resource = response.resource;
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
