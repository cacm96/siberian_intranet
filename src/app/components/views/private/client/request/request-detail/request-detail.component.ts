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


@Component({
  selector: 'sib-request-detail',
  templateUrl: './request-detail.component.html',
  styleUrls: ['./request-detail.component.scss']
})
export class RequestDetailComponent implements OnInit {

  public Revision: Array < Revision > = new Array < Revision > ();
  public message: string;
  public failedConect: string;

  dataSource: MatTableDataSource < Revision >;

  constructor(
    private dialogService: DialogService,
    private snackBar: SnackBarService,
    // tslint:disable-next-line:variable-name
    private _RevisionService: RevisionService,
    private _route: ActivatedRoute,
    private _router: Router,
    private _location: Location
  ) {

  }

  ngOnInit() {
    this.getRevision();
  }

  getRevision() {
    this._RevisionService.getOne(1).subscribe
    (
      response => {
        if (response.status == true) {
          this.Revision = response.Revision;
          console.log(this.Revision);
        } else {
          this.Revision = [];
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

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
