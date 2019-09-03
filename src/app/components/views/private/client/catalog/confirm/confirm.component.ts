import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import {Location} from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { Global } from '../../../../../../core/services/global';
import { CatalogueService } from '../../../../../../core/services/client/catalogue.service';


@Component({
  selector: 'sib-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.scss']
})
export class ConfirmComponent implements OnInit {

  public category:any;
  public subcategory:any;
  public equipinfras:any;
  public variety:any;
  public varietyDetail:any;
  
  public IdCategory:string;
  public IdSubcategory:string;
  public IdEquipinfras:string;
  public IdVariety:string;
  public NameVarietyDetail:string;
  public DescriptionVarietyDetail:string;

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
        this.IdCategory= localStorage.getItem('IdCategory');
        this.IdSubcategory= localStorage.getItem('IdSubcategory');
        this.IdEquipinfras= localStorage.getItem('IdEquipinfras');
        this.IdVariety= localStorage.getItem('IdVariety');
        this.NameVarietyDetail= localStorage.getItem('NameVarietyDetail');
        this.DescriptionVarietyDetail= localStorage.getItem('DescriptionVarietyDetail');

        this.getCategory(this.IdCategory);
        this.getSubcategory(this.IdSubcategory);
        this.getEquipinfras(this.IdEquipinfras);
        this.getVariety(this.IdVariety);
      }
      );
  }

  getCategory(id)
  {
    this._catalogueService.getCategory(id).subscribe
    (
      response =>
      {
        this.category = response.category;
        console.log(this.category);
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

  getSubcategory(id)
  {
    this._catalogueService.getSubcategoryOne(id).subscribe
    (
      response =>
      {
        this.subcategory = response.subcategory;
        console.log(this.subcategory);
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


  getEquipinfras(id)
  {
    this._catalogueService.getEquipinfrasOne(id).subscribe
    (
      response =>
      {
        this.equipinfras = response.equipinfras;
        console.log(this.equipinfras);
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

  getVariety(id)
  {
    this._catalogueService.getVarietyOne(id).subscribe
    (
      response =>
      {
        this.variety = response.variety;
        console.log(this.variety);
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


  goBack()
  { 
    this._location.back(); 
  }

}
