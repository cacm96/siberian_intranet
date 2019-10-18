import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';
import {NgForm} from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { CompanyService } from '../../../../../../../core/services/admin/company.service';
import { SnackBarService } from '../../../../../../../core/services/snack-bar.service';

@Component({
  selector: 'sib-company-create',
  templateUrl: './company-create.component.html',
  styleUrls: ['./company-create.component.scss']
})
export class CompanyCreateComponent implements OnInit {
  public company: any;
    public message: string;
    public failedConect: string;

  constructor(
    private _route: ActivatedRoute,
    private _companyService: CompanyService,
    private _location: Location,
    private snackBar: SnackBarService
  ) { }

  ngOnInit() {
  }

  register(form: NgForm) {
		if (form.valid) {
			console.log(form.value);
   this.company.rif = form.value.rif;
   this.company.name = form.value.name;
   this.company.vision = form.value.vision;
   this.company.aboutUs = form.value.aboutUs;
   this.company.address = form.value.address;
   this.company.phoneOne = form.value.phoneOne;
   this.company.phoneTwo = form.value.phoneTwo;
   this.company.facebook = form.value.facebook;
   this.company.instagram = form.value.instagram;
   this.company.twitter = form.value.twitter;

   this._companyService.create(this.company).subscribe
			(
				response => {
					if (response.status === true) {
						console.log(response);
						this.message = response.message.text;
						form.reset();
				// 		this.messageSnackBar(this.message);
					} else {
						console.log(response);
						this.message = response.message.text;
				// 		this.messageSnackBar(this.message);
					}
				},
				error => {
					console.log(error);

					if (error instanceof HttpErrorResponse) {
						if (error.status === 404) {
							this.message = error.error.message;
							console.log(error);
						// 	this.messageSnackBar(this.message);
						}
					} else {
						// this.message = error.error.message;
						console.log(error);
						// this.messageSnackBar(this.message);
					}
				}
				);
		} else {
		}
	}

  goBack() {
    this._location.back();
  }

}
