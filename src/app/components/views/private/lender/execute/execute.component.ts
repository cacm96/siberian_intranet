import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { DialogService } from '../../../../../core/services/dialog.service';
import { SnackBarService } from '../../../../../core/services/snack-bar.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import {Location} from '@angular/common';

export interface ExecuteData {
  id: string;
  client:string;
  equipinfras: string;
  code: string;
  date: string;
  amount: string;
  startdate: string;
  enddate: string;
  services: string;
  status: string;
  }
  

@Component({
  selector: 'sib-execute',
  templateUrl: './execute.component.html',
  styleUrls: ['./execute.component.scss']
})
export class ExecuteComponent implements OnInit {

  public Execute:any[];
displayedColumns: string[] = ['id','client','equipinfras','code','amount','startdate','enddate','services','status'];
  dataSource: MatTableDataSource<ExecuteData>;
  
@ViewChild(MatPaginator) paginator: MatPaginator;
@ViewChild(MatSort) sort: MatSort;
  
  constructor(
    private dialogService: DialogService,
    private snackBar: SnackBarService,
    private _route: ActivatedRoute,
		private _router: Router,
		private _location: Location
  ) 
  
  { 
    this.Execute= [
      {id:"1" ,client: "Anderson Diaz",equipinfras:"Lavadora",code:"1000",amount:"50000",startdate:"12-11-2019",enddate:"13-11-2019",services:"2",status:"approved",},
      {id:"2" ,client: "Anderson Diaz",equipinfras:"Cocina",code:"2000",amount:"100000",startdate:"12-11-2019",enddate:"14-11-2019",services:"3",status:"rejected",},
    ];

  this.dataSource = new MatTableDataSource(this.Execute);
  }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
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


