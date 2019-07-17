import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

export interface GenderData {
  id: string;
  name: string;
  description: string;
  status: string;
}

@Component({
  selector: 'sib-genders',
  templateUrl: './genders.component.html',
  styleUrls: ['./genders.component.scss']
})
export class GendersComponent implements OnInit {
	
	public gender:any[];
	displayedColumns: string[] = ['id', 'name', 'description','status','actions'];
	dataSource: MatTableDataSource<GenderData>;

	@ViewChild(MatPaginator) paginator: MatPaginator;
	@ViewChild(MatSort) sort: MatSort;

	constructor() {
		this.gender= [
	      {id:"1",name:"Masculino",description:"Género Masculino",status:"A"},
	      {id:"2",name:"Femenino",description:"Género Femenino",status:"E"},
	    ];

	this.dataSource = new MatTableDataSource(this.gender);
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
}