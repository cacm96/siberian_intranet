import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import {Location} from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { Global } from '../../../../../../../core/services/global';
import { Company } from '../../../../../../../models/company';
import { CompanyService } from '../../../../../../../core/services/company.service';


@Component({
  selector: 'sib-companies-all',
  templateUrl: './companies-all.component.html',
  styleUrls: ['./companies-all.component.scss']
})
export class CompaniesAllComponent implements OnInit {
	
	public company: Company;

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
		this._companyService.getCompany().subscribe
		(
			response =>
			{
				this.company = response.company;
				console.log(this.company);
			},
			error =>
			{
				console.log(<any>error);
			}
		)
	}

}
