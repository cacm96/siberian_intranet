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
import { Equipinfras } from '../../../../../models/equipinfras';
import { EquipinfrasService } from '../../../../../core/services/admin/equipinfras.service';

@Component({
  selector: 'sib-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  public revision: Array < Revision > = new Array < Revision > ();
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
    this.getRevision();
  }

  getRevision() {
    this._revisionService.All().subscribe
    (
      response => {
        if (response.status==true) {
          this.revision = response.revision;
          console.log(this.revision);
        } else {
          this.revision = [];
          this.message = response.message.text;
          console.log(this.message);
         // console.log('se esta yendo por el else');
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
