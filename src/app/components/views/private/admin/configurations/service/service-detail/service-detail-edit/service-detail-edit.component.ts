import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import {Location} from '@angular/common';
import { Global } from '../../../../../../../../core/services/global';
import { ServiceDetail } from '../../../../../../../../models/serviceDetail';
import { ServiceDetailService } from '../../../../../../../../core/services/admin/serviceDetail.service';
import { Componentt } from '../../../../../../../../models/componentt';
import { ComponentService } from '../../../../../../../../core/services/admin/component.service';
import { SnackBarService } from '../../../../../../../../core/services/snack-bar.service';

@Component({
	selector: 'sib-service-detail-edit',
	templateUrl: './service-detail-edit.component.html',
	styleUrls: ['./service-detail-edit.component.scss']
})
export class ServiceDetailEditComponent implements OnInit {
	public serviceDetail:ServiceDetail;
	public components:any;
	public types:any[];
	public failedConect:string;
	public message:string;

	constructor(
		private _serviceDetailService: ServiceDetailService,
		private _componentService: ComponentService,
		private _route: ActivatedRoute,
		private _router: Router,
		private _location: Location,
		private snackBar: SnackBarService
		) 

	{
		this.types= [
		{id:"Reparación",name:"Reparación"},
		{id:"Mantenimiento",name:"Mantenimiento"},
		{id:"Construcción",name:"Construcción"},
		{id:"Otros",name:"Otros"},
		];

	}

	ngOnInit() {
		this._route.params.subscribe
		(
			params =>
			{
				let id = params.id;
				this.getServiceDetails(id);
			}
			);
		this.getComponents();
	}

	getComponents()
	{
		this._componentService.All().subscribe
		(
			response =>
			{
				this.components = response.components;
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


	getServiceDetails(id)
	{
		this._serviceDetailService.getOne(id).subscribe
		(
			response =>
			{
				this.serviceDetail = response.serviceDetail;
				console.log(this.serviceDetail);
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
	{  this.serviceDetail.ComponentId = form.value.ComponentId;
		if(form.valid)
		{
			this._serviceDetailService.update(this.serviceDetail).subscribe
			(
				response =>
				{
					if(response.status==true)
					{
						this.message  = response.message.text;
						this.snackBar.openSnackBar(this.message,'');
					}
					else
					{
						this.message  = response.message.text;
						this.snackBar.openSnackBar(this.message,'');
						this.getServiceDetails(this.serviceDetail.id);
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
}
