import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import {Location} from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { Global } from '../../../../../../../../core/services/global';
import { ServiceDetail } from '../../../../../../../../models/serviceDetail';
import { ServiceDetailService } from '../../../../../../../../core/services/admin/serviceDetail.service';
import { Componentt } from '../../../../../../../../models/componentt';
import { ComponentService } from '../../../../../../../../core/services/admin/component.service';
import { SnackBarService } from '../../../../../../../../core/services/snack-bar.service';


@Component({
	selector: 'sib-service-detail-create',
	templateUrl: './service-detail-create.component.html',
	styleUrls: ['./service-detail-create.component.scss']
})
export class ServiceDetailCreateComponent implements OnInit {

	public serviceDetail:ServiceDetail;
	public components:Componentt;
	public ComponentId:string;
	public types:any[];
	public typeSelected:string="";
	public total:Number;
	public failedConect:string;

	public message:string;

	constructor
	(
		private _serviceDetailService: ServiceDetailService,
		private _componentService: ComponentService,
		private _router: Router,
		private _location: Location,
		private snackBar: SnackBarService
		) 
	{
		this.serviceDetail = new ServiceDetail();
		console.log(this.serviceDetail);
		this.types= [
		{id:"Reparación",name:"Reparación"},
		{id:"Mantenimiento",name:"Mantenimiento"},
		{id:"Construcción",name:"Construcción"},
		{id:"Otros",name:"Otros"},
		];
	}

	ngOnInit() {
		this.getComponents();

	}

	getComponents()
	{
		this._componentService.All().subscribe
		(
			response =>
			{
				if (response.status==true)
				{
					this.components = response.components;
					this.ComponentId = "";
					console.log(this.components);
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

	register(form: NgForm)
	{
		if(form.valid)
		{
			this.serviceDetail.name = form.value.name;
			this.serviceDetail.note = form.value.note;
			this.serviceDetail.ComponentId= form.value.ComponentId;
			this.serviceDetail.estimatedPrice = form.value.estimatedPrice;
			this.serviceDetail.estimatedWarrantyTime = form.value.estimatedWarrantyTime;
			this.serviceDetail.serviceType = form.value.type;
			

			console.log(this.serviceDetail);

			this._serviceDetailService.create(this.serviceDetail).subscribe
			(
				response =>
				{
					if (response.status==true)
					{
						console.log(response.serviceDetail);
						this.message = response.message.text;
						form.reset();
						this.messageSnackBar(this.message); 
					}
					else
					{
						console.log(response);
						this.message = response.message.text;
						this.messageSnackBar(this.message);
					}
				},
				error =>
				{
					console.log(error);

					if(error instanceof HttpErrorResponse)
					{
						if(error.status===404)
						{
							this.message = error.error.message;
							console.log(error);
							this.messageSnackBar(this.message);
						}
					}else
					{
						
						console.log(error);
						
					}
				}
				);
		}else
		{
		}
	}

	messageSnackBar(message)
	{
		this.snackBar.openSnackBarSuccess(message);
	}
	goBack(){
		this._location.back();
	  }


}
