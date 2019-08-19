import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import {Location} from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { Global } from '../../../../../../../core/services/global';
import { Company } from '../../../../../../../models/company';
import { CompanyService } from '../../../../../../../core/services/admin/company.service';

@Component({
  selector: 'sib-company-edit',
  templateUrl: './company-edit.component.html',
  styleUrls: ['./company-edit.component.scss']
})
export class CompanyEditComponent implements OnInit {

	public company: any;
	public updateCompany;
	public failedConect:string;

	constructor
	(
		private _companyService: CompanyService,
		private _route: ActivatedRoute,
		private _router: Router,
		private _location: Location
	)
	{
	}

	ngOnInit()
	{
		this.getCompany();
	}

	getCompany()
	{
		this._companyService.getAll().subscribe
		(
			response =>
			{
				this.company = response;
				this.company = this.company.company;
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
		if(form.valid)
		{
			this._companyService.update(this.company).subscribe
			(
				response =>
				{
					console.log(response);
					if(response.company)
					{
						this.updateCompany = response.company;
						this.getCompany();
/*						this.message  = response.message;
						this.isAlert = true;
						this.onIsError();*/
					}
					else
					{
						/*this.message  = response.message;
						this.isAlert = false;
						this.onIsError();*/
					}
				},
				error =>
				{
					console.log(error);
					/*this.message = error.message;
					this.isAlert = false;
					this.onIsError();
					if(error instanceof HttpErrorResponse)
					{
						if(error.status===404)
						{
							this.message = error.error.message;
							console.log(error);
							this.isAlert = false;
							this.onIsError();
						}

						if(error.status===500)
						{
							this.message = error.error.message;
							console.log(error);
							this.isAlert = false;
							this.onIsError();
						}
					}*/
				}
			);
		}else
		{
			//this.onIsError();
		}
		
	}

}
