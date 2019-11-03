import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { Global } from 'src/app/core/services/global'
import { ServiceDetail } from 'src/app/models/serviceDetail';
import { ServiceDetailService } from 'src/app/core/services/admin/serviceDetail.service';
import { ResourceService } from 'src/app/core/services/admin/resource.service';
import { SnackBarService } from 'src/app/core/services/snack-bar.service';

@Component({
  selector: 'sib-add-resource',
  templateUrl: './add-resource.component.html',
  styleUrls: ['./add-resource.component.scss']
})
export class AddResourceComponent implements OnInit {

  public resources: any;
  public auxResources: any;
  public serviceDetail: ServiceDetail;
  public resourceId: string;
  public serviceDetailId: string;
  public total: Number;
  public message: string;
  public failedConect: string;

  public seriviceDetailUpdate: any = {
    id: Number,
    resources: []
  };

  constructor
    (
      private _resourceService: ResourceService,
      private _serviceDetailService: ServiceDetailService,
      private _router: Router,
      private _route: ActivatedRoute,
      private _location: Location,
      private snackBar: SnackBarService
    ) {
  }

  ngOnInit() {
    this._route.params.subscribe
      (
        params => {
          let id = params.id;
          this.serviceDetailId = id;
          this.seriviceDetailUpdate.id = id;
          this.getServiceDetail(id);
        }
      );
    this.getResources();
    this.auxResources = [];
  }

  getResources() {
    this._resourceService.All().subscribe
      (
        response => {
          if (response.status == true) {
            this.resources = response.resources;
            this.resourceId = "";
            console.log(this.resources);
          }
          else {
            this.total = 0;
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

  getServiceDetail(id) {
    this._serviceDetailService.getOne(id).subscribe
      (
        response => {
          this.serviceDetail = response.serviceDetail;
          console.log(this.serviceDetail);
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


  register(form: NgForm)
	{
		if(form.valid)
		{
      if(this.serviceDetail.resources){
        for(let resource of this.serviceDetail.resources) {
          this.auxResources.push(resource.id);
        }
      }
      this.auxResources.push(this.resourceId);
      this.seriviceDetailUpdate.resources = this.auxResources;
      console.log(this.seriviceDetailUpdate.resources," recursos");
      console.log(this.seriviceDetailUpdate," update");

			this._serviceDetailService.addResource(this.seriviceDetailUpdate).subscribe
			(
				response =>
				{
					if (response.status==true)
					{
						this.getServiceDetail(this.serviceDetailId);
						this.message = response.message.text;
						this.messageSnackBar(this.message); 
						form.reset();
					}
					else
					{
						console.log(response);
						this.getServiceDetail(this.serviceDetailId);
						this.message = response.message.text;
						this.messageSnackBar(this.message);
          }
          //this.seriviceDetailUpdate.resources = [];
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
						//this.message = error.error.message;
						console.log(error);
						//this.messageSnackBar(this.message);
					}
				}
				);
		}else
		{
		}
	}

  onDelete(id) {

  }

  messageSnackBar(message) {
    this.snackBar.openSnackBarSuccess(message);
  }

  goBack() {
    this._location.back();
  }

}
