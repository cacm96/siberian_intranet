import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import {Location} from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { Global } from '../../../../../../../../core/services/global'

import { VarietyDetail } from '../../../../../../../../models/varietyDetail';
import { VarietyDetailService } from '../../../../../../../../core/services/admin/varietyDetail.service';
import { ServiceDetail } from '../../../../../../../../models/serviceDetail';
import { ServiceDetailService } from '../../../../../../../../core/services/admin/serviceDetail.service';

import { SnackBarService } from '../../../../../../../../core/services/snack-bar.service';
@Component({
	selector: 'sib-add-service-detail',
	templateUrl: './add-service-detail.component.html',
	styleUrls: ['./add-service-detail.component.scss']
})
export class AddServiceDetailComponent implements OnInit {

	public varietyDetail:VarietyDetail;
	public serviceDetailsV: any;
	public serviceDetails: any;
	public services:string;
	public total:Number;
	public message:string;
	public failedConect:string;

	constructor
	(
		private _varietyDetailService: VarietyDetailService,
		private _serviceDetailService: ServiceDetailService,
		private _router: Router,
		private _route: ActivatedRoute,
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
				//this.getVarietyDetail(id);
			}
			);

		this.getServiceDetails();

	}

	getVarietyDetail(id)
	{
		this._varietyDetailService.getOne(id).subscribe
		(
			response =>
			{
				this.varietyDetail = response.varietyDetail;
				this.serviceDetailsV = this.varietyDetail.serviceDetail;
				
				console.log(this.varietyDetail);

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

	getServiceDetails()
	{
		this._serviceDetailService.All().subscribe
		(
			response =>
			{

				if (response.status==true)
				{
					this.serviceDetails = response.serviceDetails;
					console.log(this.serviceDetails);
					this.services="";
				}
				else
				{
					this.total = 0;
					this.message = response.message.text;
					console.log(this.message);
				}

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
		console.log(form.value.services);
		if(form.valid)
		{
			this._varietyDetailService.updateService(form.value.services).subscribe
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
					}
					console.log(response);
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

	goBack()
	{ 
		this._location.back(); 
	}

}
