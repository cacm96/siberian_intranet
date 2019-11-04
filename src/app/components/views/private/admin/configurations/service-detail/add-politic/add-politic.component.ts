import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { Global } from 'src/app/core/services/global'
import { ServiceDetail } from 'src/app/models/serviceDetail';
import { ServiceDetailService } from 'src/app/core/services/admin/serviceDetail.service';
import { PolicyService } from 'src/app/core/services/admin/policy.service';
import { SnackBarService } from 'src/app/core/services/snack-bar.service';

@Component({
  selector: 'sib-add-politic',
  templateUrl: './add-politic.component.html',
  styleUrls: ['./add-politic.component.scss']
})
export class AddPoliticComponent implements OnInit {

  public policies: any;
  public auxPolicies: any;
  public serviceDetail: ServiceDetail;
  public policyId: string;
  public serviceDetailId: string;
  public total: Number;
  public message: string;
  public failedConect: string;

  public seriviceDetailUpdate: any = {
    id: Number,
    policies: []
  };

  constructor
    (
      private _policyService: PolicyService,
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
    this.getPolicies();
    this.auxPolicies = [];
  }

  getPolicies() {
    this._policyService.All().subscribe
      (
        response => {
          if (response.status == true) {
            this.policies = response.policies;
            this.policyId = "";
            console.log(this.policies);
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
      if(this.serviceDetail.policies){
        for(let policy of this.serviceDetail.policies) {
          this.auxPolicies.push(policy.id);
        }
      }
      this.auxPolicies.push(this.policyId);
      this.seriviceDetailUpdate.policies = this.auxPolicies;
      console.log(this.seriviceDetailUpdate.policies," politicas");
      console.log(this.seriviceDetailUpdate," update");

			this._serviceDetailService.addPolitic(this.seriviceDetailUpdate).subscribe
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
