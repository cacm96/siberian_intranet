import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { DialogService } from 'src/app/core/services/dialog.service';
import { SnackBarService } from 'src/app/core/services/snack-bar.service';

import { Router, ActivatedRoute, Params } from '@angular/router';
import {Location} from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { Global } from 'src/app/core/services/global';
import { Revision } from 'src/app/models/revision';
import { RevisionService } from 'src/app/core/services/client/revision.service';

@Component({
  selector: 'sib-budget',
  templateUrl: './budget.component.html',
  styleUrls: ['./budget.component.scss']
})
export class BudgetComponent implements OnInit {
  public revision:any;
  public revisions: Array < Revision > = new Array < Revision > ();
  public total:number=0;
  public userID:string;
  public message:string;
  public failedConect:string;

  displayedColumns: string[] = ['id','equipinfras','client','location','date','status'];
  dataSource: MatTableDataSource<Revision>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor
  (
    private dialogService: DialogService,
    private snackBar: SnackBarService,
    private _revisionService: RevisionService,
    private _route: ActivatedRoute,
    private _router: Router,
    private _location: Location
    )
  {
  }

  ngOnInit() {
    this.userID = localStorage.getItem('resID');
    this.getRevisions(this.userID);
  }

  getRevisions(userID)
  {
    this._revisionService.getRevisionLender(userID).subscribe
    (
      response =>
      {
        if (response.status==true)
        {
          this.revisions = response.revisions;
          this.revisions = this.revisions.filter(revision=>{return revision.status =="diagnosticated" || revision.status =="finalized"});
          this.total = this.revisions.length;
          console.log(this.revisions);
          this.table();
        }
        else
        {
          this.revisions = [];
          this.message = response.message.text;
          console.log(this.message);
          this.table();
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

  applyFilter(filterValue: string)
  {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  table()
  {
    this.revisions = this.snackBar.orderByDateAsc(this.revisions);
    this.dataSource = new MatTableDataSource(this.revisions);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  goBack()
  {
    this._location.back();
  }
}

