import { Component, OnInit, ViewChild } from '@angular/core';
import {NgForm} from '@angular/forms';
import { DialogService } from 'src/app/core/services/dialog.service';
import { SnackBarService } from 'src/app/core/services/snack-bar.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import {Location} from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { Global } from 'src/app/core/services/global';
import { ServiceOrder } from 'src/app/models/serviceOrder';
import { ServiceOrderService } from 'src/app/core/services/client/serviceOrder.service';
import { environment } from 'src/environments/environment';

const BASE_URL = environment.imgURL;

@Component({
  selector: 'sib-budget-detail',
  templateUrl: './budget-detail.component.html',
  styleUrls: ['./budget-detail.component.scss']
})
export class BudgetDetailComponent implements OnInit
{

  public serviceOrder:ServiceOrder;
  public serviceDetails:any;
  public serviceOrderId:any;
  public message: string;
  public failedConect: string;
  public isServiceDetail:boolean=false;
  public amountTotal:any=0;
  public urldelafault:string="assets/img/request/revision_3.jpg";
  public totalResoucesSelected:number=0;

  constructor(
    private dialogService: DialogService,
    private snackBar: SnackBarService,
    private _serviceOrderService: ServiceOrderService,
    private _route: ActivatedRoute,
    private _location: Location
    ) {


  }

  ngOnInit()
  {
    this._route.params.subscribe
    (
      params =>
      {
        let id = params.id;
        this.serviceOrderId = id;
        this.getServiceOrder(id);
      }
      );
  }

  getServiceOrder(id)
  {
    this._serviceOrderService.getOne(id).subscribe
    (
      response =>
      {
        this.serviceOrder = response.serviceOrder;
        console.log(this.serviceOrder);
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
      });
  }


  goBack()
  {
    this._location.back();
  }

}
