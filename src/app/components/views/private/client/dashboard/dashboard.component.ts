import { Component, OnInit } from '@angular/core';
import { DialogService } from '../../../../../core/services/dialog.service';
import { SnackBarService } from '../../../../../core/services/snack-bar.service';

import { Router, ActivatedRoute, Params } from '@angular/router';
import {Location} from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { Global } from '../../../../../core/services/global';

import { User } from '../../../../../models/user';
import { UserService } from '../../../../../core/services/admin/user.service';
import { Revision } from '../../../../../models/revision';
import { RevisionService } from '../../../../../core/services/client/revision.service';
import { ServiceOrder } from '../../../../../models/serviceOrder';
import { ServiceOrderService } from '../../../../../core/services/client/serviceOrder.service';
import { Equipinfras } from '../../../../../models/equipinfras';
import { EquipinfrasService } from '../../../../../core/services/admin/equipinfras.service';

@Component({
  selector: 'sib-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  public revisions: any;
  public totalRevision:any;
  public totalServiceOrder:any;
  public serviceOrders: any;
  public warranties:any;
  public totalWarranty;
  public equipinfras: Equipinfras;
  public userID:string;
  public message: string;
  public failedConect: string;

  constructor(
    private dialogService: DialogService,
    private snackBar: SnackBarService,
    private _revisionService: RevisionService,
    private _serviceorderService: ServiceOrderService,
    private _equipinfrasService: EquipinfrasService,
    private _route: ActivatedRoute,
    private _location: Location
  ) {

  }

  ngOnInit() {
    this.userID = localStorage.getItem('resID');
    this.getRevisions(this.userID);
    this.getServiceOrders(this.userID);
    this.getWarranties(this.userID);
  }

  getRevisions(userid) {
    this._revisionService.getRevisionUser(userid).subscribe
    (
      response => {
        if (response.status==true) {
          this.revisions = response.revisions;
          this.totalRevision = this.revisions.length;
          console.log(this.revisions);
        } else {
          this.revisions = [];
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


  getServiceOrders(userid) {
    this._serviceorderService.getServiceOrderUser(userid).subscribe
    (
      response => {
        if (response.status==true) {
          this.serviceOrders = response.serviceOrders;
          this.serviceOrders = this.serviceOrders.filter(serviceOrders=>{return serviceOrders.status =="approved" || serviceOrders.status =="budgeted"});
          this.totalServiceOrder = this.serviceOrders.length;
          console.log(this.serviceOrders);
        } else {
          this.serviceOrders = [];
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

  getWarranties(userid) {
    this._serviceorderService.getServiceOrderUser(userid).subscribe
    (
      response => {
        if (response.status==true) {
          this.warranties = response.serviceOrders;
          this.warranties = this.warranties.filter(serviceOrders=>{return serviceOrders.status =="warranty"});
          this.totalWarranty = this.warranties.length;
          console.log(this.warranties);
        } else {
          this.warranties = [];
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

}
