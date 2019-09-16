import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { DialogService } from '../../../../../../core/services/dialog.service';
import { SnackBarService } from '../../../../../../core/services/snack-bar.service';

import { Router, ActivatedRoute, Params } from '@angular/router';
import {Location} from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { Global } from '../../../../../../core/services/global';
import { Revision } from '../../../../../../models/revision';
import { RevisionService } from '../../../../../../core/services/admin/revision.service';
import { ServiceDetail } from '../../../../../../models/serviceDetail';
import { ServiceDetailService } from '../../../../../../core/services/admin/serviceDetail.service';
import { Equipinfras } from '../../../../../../models/equipinfras';
import { EquipinfrasService } from '../../../../../../core/services/admin/equipinfras.service';



@Component({
  selector: 'sib-request-detail',
  templateUrl: './request-detail.component.html',
  styleUrls: ['./request-detail.component.scss']
})
export class RequestDetailComponent implements OnInit {

  public revision: Array < Revision > = new Array < Revision > ();
  public servicedetail: Array < ServiceDetail > = new Array < ServiceDetail > ();
  public equipinfras: Array < Equipinfras > = new Array < Equipinfras > ();
  public message: string;
  public failedConect: string;

  dataSource: MatTableDataSource < Revision >;

  constructor(
    private dialogService: DialogService,
    private snackBar: SnackBarService,
    // tslint:disable-next-line:variable-name
    private _revisionService: RevisionService,
    // tslint:disable-next-line:variable-name
    private _serviceDetailService: ServiceDetailService,
    // tslint:disable-next-line:variable-name
    private _equipinfrasService: EquipinfrasService,
    // private _route: ActivatedRoute,
   // private _router: Router,
    // private _location: Location
  ) {

  }

  ngOnInit() {
    this.getRevision();
   // this.getServiceDetail();
    this.getEquipinfras();
  }

  getRevision() {
    this._revisionService.getOne(1).subscribe
    (
      response => {
        if (response.status == true) {
          this.revision = response.revision;
          console.log(this.revision);
        } else {
          this.revision = [];
          this.message = response.message.text;
          console.log(this.message);
        }

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

 /* getServiceDetail() {
    this._serviceDetailService.getOne(1).subscribe
    (
      response => {
        if (response.status == true) {
          this.servicedetail = response.servicedetail;
          console.log(this.servicedetail);
        } else {
          this.servicedetail = [];
          this.message = response.message.text;
          console.log(this.message);
        }

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
  }*/

  getEquipinfras() {
    this._equipinfrasService.getOne(1).subscribe
    (
      response => {
        if (response.status == true) {
          this.equipinfras = response.equipinfras;
          console.log(this.equipinfras);
        } else {
          this.equipinfras = [];
          this.message = response.message.text;
          console.log(this.message);
        }

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
