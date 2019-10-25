import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import {Location} from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { Global } from 'src/app//core/services/global';
import { Revision } from 'src/app/models/revision';
import { RevisionService } from 'src/app/core/services/client/revision.service';
import { ServiceOrder } from 'src/app//models/serviceOrder';
import { ServiceOrderService } from 'src/app/core/services/client/serviceOrder.service';

@Component({
  selector: 'sib-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss']
})
export class ServiceComponent implements OnInit {
	public serviceOrders: any;
	public userID:string;
	public message: string;
	public failedConect: string;

	constructor
	(
		private _revisionService: RevisionService,
		private _serviceorderService: ServiceOrderService,
		private _route: ActivatedRoute,
		private _location: Location
		) { }

	ngOnInit() {
		this.userID = localStorage.getItem('resID');
		this.getServiceOrders(this.userID);
	}

	getServiceOrders(id) {
		this._serviceorderService.getServiceOrderUser(id).subscribe
		(
			response => {
				if (response.status==true)
				{
					this.serviceOrders = response.serviceOrders;
					console.log(this.serviceOrders);
				}
				else
				{
					this.serviceOrders = [];
					this.message = response.message.text;
					console.log(this.message);
				}
			},
			error => {
				console.log(<any>error);
				if (error instanceof HttpErrorResponse) {
					if (error.status === 0) {
						this.failedConect = Global.failed;
					}
				}
			}
			)
	}


	goBack()
	{ 
		this._location.back(); 
	}

}
