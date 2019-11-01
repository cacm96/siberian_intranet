import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { Global } from '../../../../../../../../core/services/global'
import { ServiceDetail } from '../../../../../../../../models/serviceDetail';
import { ServiceDetailService } from '../../../../../../../../core/services/admin/serviceDetail.service';
import { ActivityService } from '../../../../../../../../core/services/admin/activity.service';
import { SnackBarService } from '../../../../../../../../core/services/snack-bar.service';

@Component({
  selector: 'sib-add-activity',
  templateUrl: './add-activity.component.html',
  styleUrls: ['./add-activity.component.scss']
})
export class AddActivityComponent implements OnInit {

  public activities: any;
  public auxActivities: any;
  public serviceDetail: ServiceDetail;
  public activityId: string;
  public serviceDetailId: string;
  public total: Number;
  public message: string;
  public failedConect: string;

  public seriviceDetailUpdate: any = {
    id: Number,
    activities: []   //activities
  };

  constructor
    (
      private _activityService: ActivityService,
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
    this.getActivities();
    this.auxActivities = [];
  }

  getActivities() {
    this._activityService.All().subscribe
      (
        response => {
          if (response.status == true) {
            this.activities = response.activities;
            this.activityId = "";
            console.log(this.activities);
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

      if(this.serviceDetail.activities){
        for(let activity of this.serviceDetail.activities) {
          this.auxActivities.push(activity.id);
        }
      }
      this.auxActivities.push(this.activityId);
      this.seriviceDetailUpdate.activities = this.auxActivities;
      console.log(this.seriviceDetailUpdate.activities," activities");
      console.log(this.seriviceDetailUpdate," update");

			this._serviceDetailService.addActivity(this.seriviceDetailUpdate).subscribe
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
          //this.seriviceDetailUpdate.activities = [];
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
