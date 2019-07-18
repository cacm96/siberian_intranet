import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { DialogService } from '../../../../../../core/services/dialog.service';
import { SnackBarService } from '../../../../../../core/services/snack-bar.service';

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
	displayedColumns: string[] = ['id', 'name', 'description','status','edit','delete'];
	dataSource: MatTableDataSource<GenderData>;

	@ViewChild(MatPaginator) paginator: MatPaginator;
	@ViewChild(MatSort) sort: MatSort;


	constructor
	(
		private dialogService: DialogService,
		private snackBar: SnackBarService
	)
	{
		this.gender = [
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

	onDelete(id){
		this.dialogService.openConfirmDialog('¿Estas seguro de eliminar el Género '+id+' ?').afterClosed().subscribe(res=>{
			if (res==true) {
				console.log(id);
				this.snackBar.openSnackBar('Eliminado Correctamente','¿Deshacer?').onAction().subscribe(() => {
				  console.log('Recuperado');
				});
			}else{
				console.log(res);
			}
		});
	}
}