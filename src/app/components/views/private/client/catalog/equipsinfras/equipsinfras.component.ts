import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import {Location} from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { Global } from '../../../../../../core/services/global';
import { CatalogueService } from '../../../../../../core/services/client/catalogue.service';


@Component({
	selector: 'sib-equipsinfras',
	templateUrl: './equipsinfras.component.html',
	styleUrls: ['./equipsinfras.component.scss']
})
export class EquipsinfrasComponent implements OnInit {

	public equipsinfras:any;
	public equipinfras:any;
	public varietys:any;
	public subcategory:any;
	public category:any;
	public IdEquipinfras:string;
	public total:number;
	public message:string;
	public failedConect:string;

	constructor
	(
		private _catalogueService: CatalogueService,
		private _route: ActivatedRoute,
		private _router: Router,
		private _location: Location
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
				this.IdEquipinfras= localStorage.getItem('IdEquipinfras');
				//this.getEquipinfras(this.IdEquipinfras);
			}
		);
	}


	getSubcategory(id)
	{
		this._catalogueService.getSubcategory(id).subscribe
		(
			response =>
			{
				if (response.status==true)
				{
					this.equipsinfras = response.subcategory.equipinfras;
					this.subcategory = response.subcategory;
					this.category = response.subcategory.category;
					console.log(this.equipsinfras);
				}
				else
				{
					this.total=0;
					this.message = response.message.text;
					console.log(this.message);
				}

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

	/*getEquipinfras(id)
	{
		this._catalogueService.getEquipinfras(id).subscribe
		(
			response =>
			{
				if (response.status==true)
				{
					this.equipinfras = response.equipinfras;
					this.varietys = response.equipinfras.variety;
					console.log(response);
				}
				else
				{
					this.message = response.message.text;
					console.log(this.message);
				}

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
	}*/

	goBack()
	{ 
		this._location.back(); 
    }

    SetIdEquipinfras(id){
    	localStorage.setItem('IdEquipinfras',id);
    }

}
