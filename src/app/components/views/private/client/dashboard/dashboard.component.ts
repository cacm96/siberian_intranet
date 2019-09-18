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
import { RevisionService } from '../../../../../core/services/admin/revision.service';
import { ServiceOrder } from '../../../../../models/serviceOrder';
import { ServiceOrderService } from '../../../../../core/services/admin/serviceOrder.service';
import { Equipinfras } from '../../../../../models/equipinfras';
import { EquipinfrasService } from '../../../../../core/services/admin/equipinfras.service';

@Component({
  selector: 'sib-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  public revisions: any;
  public serviceOrders: any;
  public equipinfras: Equipinfras;
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
    this.getRevisions();
    this.getServiceOrders();
  }

  getRevisions() {
    this._revisionService.All().subscribe
    (
      response => {
        if (response.status==true) {
          this.revisions = response.revisions;
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


  getServiceOrders() {
    this._serviceorderService.All().subscribe
    (
      response => {
        if (response.status==true) {
          this.serviceOrders = response.serviceOrders;
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

  getEquipinfras(id) {
    this._equipinfrasService.getOne(id).subscribe
    (
      response => {
        this.equipinfras = response.equipinfras;
        console.log(this.equipinfras);
      },
      error => {
        console.log( < any > error);
        if (error instanceof HttpErrorResponse) {
          if (error.status === 0) {
            this.failedConect = Global.failed;
          }
        }
      }
      )
  }
}
