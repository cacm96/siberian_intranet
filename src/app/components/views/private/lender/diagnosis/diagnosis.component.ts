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

export interface DiagnosisData {
	id: string;
	client: string;
	equipinfras: string;
	location: string;
	date: string;
	lender: string;
	status: string;
	}

@Component({
  selector: 'sib-diagnosis',
  templateUrl: './diagnosis.component.html',
  styleUrls: ['./diagnosis.component.scss']
})
export class DiagnosisComponent implements OnInit {

	
	
	public Diagnosis:any[];

	displayedColumns: string[] = ['id','client','equipinfras','location','date','lender','status'];
	dataSource: MatTableDataSource<DiagnosisData>;

	@ViewChild(MatPaginator) paginator: MatPaginator;
	@ViewChild(MatSort) sort: MatSort;
	constructor
	(
		private dialogService: DialogService,
		private snackBar: SnackBarService,
		private _route: ActivatedRoute,
		private _router: Router,
		private _location: Location
		)
	{
		this.Diagnosis =
		[
	      {id:"1" ,client:"Anderson Diaz",equipinfras:"Lavadora",location:"Calle San Rafael",date:"10-11-2019",lender:"Maria Moreno",status:"diagnosticated",},
	      {id:"1" ,client:"Anderson Diaz",equipinfras:"Cocina",location:"Calle San Rafael",date:"11-11-2019",lender:"Maria Moreno",status:"approved",},
	    ];

		this.dataSource = new MatTableDataSource(this.Diagnosis);
	}

	ngOnInit() {
		this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
	}

	

	applyFilter(filterValue: string)
	{
		this.dataSource.filter = filterValue.trim().toLowerCase();

		if (this.dataSource.paginator) {
			this.dataSource.paginator.firstPage();
		}
	}

	

	goBack()
	{ 
		this._location.back(); 
	}

}
