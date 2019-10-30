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

export interface RevisionR {
	id: string;
	client: string;
	equipinfras: string;
	location: string;
	date: string;
	lender: string;
	status: string;
	}

@Component({
  selector: 'sib-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.scss']
})
export class RequestComponent implements OnInit {

	public revision:any;
	public revisions: any[];
	public total:number=0;
	public userID:string;
	public message:string;
	public failedConect:string;

	displayedColumns: string[] = ['id','client','equipinfras','location','date','lender','status','approved', 'cancelled'];
	dataSource: MatTableDataSource<RevisionR>;

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
		this.revisions =
		[
	      {id:"1" ,client:"Anderson Diaz",equipinfras:"Lavadora",location:"Calle San Rafael",date:"10-11-2019",lender:"Maria Moreno",status:"requested",},
	      {id:"1" ,client:"Anderson Diaz",equipinfras:"Cocina",location:"Calle San Rafael",date:"11-11-2019",lender:"Maria Moreno",status:"approved",},
	    ];

	    this.table();
	}

	ngOnInit() {
		this.userID = localStorage.getItem('resID');
		this.getRevisions(this.userID);
	}

	getRevisions(userID)
	{
		this._revisionService.getRevisionUser(userID).subscribe
		(
			response =>
			{
				if (response.status==true)
				{
					this.revisions = response.revisions;
					this.revisions = this.revisions.filter(revision=>{return revision.status =="requested"});
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
		this.dataSource = new MatTableDataSource(this.revisions);
		this.dataSource.paginator = this.paginator;
		this.dataSource.sort = this.sort;
	}

	onApproved(id){
		this.dialogService.openConfirmDialog('¿Estás seguro de aprobar esta Solicitud?').afterClosed().subscribe
		(
			response =>
			{
				if (response==true)
				{
					this.approvedRevision(id);
				}else
				{
					console.log(response);
				}
			}
			);
	}


	approvedRevision(id)
	{
		this._revisionService.approve(id).subscribe
		(
			response =>
			{
				console.log(response);
				this.message = response.message.text;
				this.snackBar.openSnackBarSuccess(this.message);
				this.getRevisions(this.userID);
			},
			error =>
			{
				console.log(<any>error);
			}
			)
	}


	onCancelled(id){
		this.dialogService.openConfirmDialog('¿Estás seguro de rechazar esta Solicitud?').afterClosed().subscribe
		(
			response =>
			{
				if (response==true)
				{
					this.cancelRevision(id);
				}else
				{
					console.log(response);
				}
			}
			);
	}


	cancelRevision(id)
	{
		this._revisionService.cancel(id).subscribe
		(
			response =>
			{
				console.log(response);
				this.message = response.message.text;
				this.snackBar.openSnackBarSuccess(this.message);
				this.getRevisions(this.userID);
			},
			error =>
			{
				console.log(<any>error);
			}
			)
	}

	goBack()
	{ 
		this._location.back(); 
	}

}
