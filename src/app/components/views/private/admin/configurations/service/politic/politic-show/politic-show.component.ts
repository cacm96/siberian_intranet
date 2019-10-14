import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import {Location} from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { Global } from '../../../../../../../../core/services/global';
import { Policy } from '../../../../../../../../models/policy';
import { PolicyService } from '../../../../../../../../core/services/admin/policy.service';
import { SnackBarService } from '../../../../../../../../core/services/snack-bar.service';

@Component({
  selector: 'sib-politic-show',
  templateUrl: './politic-show.component.html',
  styleUrls: ['./politic-show.component.scss']
})
export class PoliticShowComponent implements OnInit {

  public policy:Policy;
	public message:string;
  public failedConect:string;

  constructor(
    private _policyService: PolicyService,
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
				this.getPolicies(id);
			}
		);
  }

  getPolicies(id)
	{
		this._policyService.getOne(id).subscribe
		(
			response =>
			{
        this.policy = response.policy;
        console.log(this.policy);
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
	goBack(){
		this._location.back();
	  }

}
