import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ServiceDetail } from 'src/app/models/serviceDetail';
import { ServiceDetailService } from 'src/app/core/services/admin/serviceDetail.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import {Location} from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { Global } from 'src/app/core/services/global';

@Component({
  selector: 'sib-report-statistical-filter-dialog',
  templateUrl: './report-statistical-filter-dialog.component.html',
  styleUrls: ['./report-statistical-filter-dialog.component.scss']
})
export class ReportStatisticalFilterDialogComponent implements OnInit {

  public serviceDetails:any;
  public types:any;
  public typeSelected:string="";
  public message:string;
  public failedConect:string;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data,
    public dialogRef: MatDialogRef<ReportStatisticalFilterDialogComponent>,
    private _serviceDetailService: ServiceDetailService,
    private _route: ActivatedRoute,
    private _router: Router,
    private _location: Location,
    private dialogService: DialogService,
    private snackBar: SnackBarService,
  ) { }

  ngOnInit()
  {
    this.types =
    [
      {id:"Reparación",name:"Reparación"},
      {id:"Mantenimiento",name:"Mantenimiento"},
      {id:"Construcción",name:"Construcción"},
      {id:"Otros",name:"Otros"},
    ];
    this.getServiceDetails();
  }

  closeDialog() {
    this.dialogRef.close();
  }

  getServiceDetails()
  {
    this._serviceDetailService.All().subscribe
    (
      response =>
      {
        if (response.status==true)
        {
          this.serviceDetails = response.serviceDetails;
          console.log(this.serviceDetails);
        }
        else
        {
          this.serviceDetails = [];
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
}
