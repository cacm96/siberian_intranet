import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { DialogService } from '../../../../../../core/services/dialog.service';
import { SnackBarService } from '../../../../../../core/services/snack-bar.service';

import { Router, ActivatedRoute, Params } from '@angular/router';
import {Location} from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { Global } from '../../../../../../core/services/global';
import { Revision } from '../../../../../../models/revision';
import { RevisionService } from '../../../../../../core/services/client/revision.service';
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

  public revision: any;
  public equipinfras: Equipinfras;
  public message: string;
  public failedConect: string;

  constructor(
    private dialogService: DialogService,
    private snackBar: SnackBarService,
    private _revisionService: RevisionService,
    private _equipinfrasService: EquipinfrasService,
    private _route: ActivatedRoute,
    private _location: Location
    ) {

  }

  ngOnInit() {
    this._route.params.subscribe (
      params => {
        let id = params.id;
        this.getRevision(id);
      }
      );
  }

  getRevision(id) {
    this._revisionService.getOne(id).subscribe
    (
      response =>
      {
        this.revision = response.revision;
        console.log(this.revision);
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

  goBack() {
    this._location.back();
  }

}
