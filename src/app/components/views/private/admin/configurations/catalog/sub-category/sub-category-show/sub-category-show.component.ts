import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import {Location} from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { Global } from '../../../../../../../../core/services/global';
import { Subcategory } from '../../../../../../../../models/subcategory';
import { SubcategoryService } from '../../../../../../../../core/services/admin/subcategory.service';
import { SnackBarService } from '../../../../../../../../core/services/snack-bar.service';

@Component({
  selector: 'sib-sub-category-show',
  templateUrl: './sub-category-show.component.html',
  styleUrls: ['./sub-category-show.component.scss']
})
export class SubCategoryShowComponent implements OnInit {

	public subcategory:Subcategory;
	public equipinfras:any;
	public message:string;
  	public failedConect:string;

	constructor
	(
		private _subcategoryService: SubcategoryService,
		private _route: ActivatedRoute,
		private _router: Router,
		private _location: Location,
    	private snackBar: SnackBarService
    )
    {

    }

	ngOnInit()
	{
		this._route.params.subscribe
		(
			params =>
			{
				let id = params.id;
				this.getSubcategory(id);
			}
		);
	}

	getSubcategory(id)
	{
		this._subcategoryService.getOne(id).subscribe
		(
			response =>
			{
				this.subcategory = response.subcategory;
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
