import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import {Location} from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { Global } from '../../../../../../../../core/services/global';
import { ServiceDetail } from '../../../../../../../../models/serviceDetail';
import { ServiceDetailService } from '../../../../../../../../core/services/admin/serviceDetail.service';
import { SnackBarService } from '../../../../../../../../core/services/snack-bar.service';

@Component({
  selector: 'sib-service-detail-show',
  templateUrl: './service-detail-show.component.html',
  styleUrls: ['./service-detail-show.component.scss']
})
export class ServiceDetailShowComponent implements OnInit {

  public serviceDetail:ServiceDetail;
	public message:string;
  public failedConect:string;

  constructor(
    private _serviceDetailService: ServiceDetailService,
		private _route: ActivatedRoute,
		private _router: Router,
		private _location: Location,
    private snackBar: SnackBarService
  ) { }

  ngOnInit() {
    this._route.params.subscribe
		(
			params =>
			{
				let id = params.id;
				this.getServiceDetails(id);
			}
		);
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
}
