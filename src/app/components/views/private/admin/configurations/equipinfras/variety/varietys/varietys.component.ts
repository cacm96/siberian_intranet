import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { DialogService } from '../../../../../../../../core/services/dialog.service';
import { SnackBarService } from '../../../../../../../../core/services/snack-bar.service';

export interface VarietyData {
  id: string;
  name: string;
  description: string;
  status: string;
}

@Component({
  selector: 'sib-varietys',
  templateUrl: './varietys.component.html',
  styleUrls: ['./varietys.component.scss']
})
export class VarietysComponent implements OnInit {

  public variety:any[];
	displayedColumns: string[] = ['id', 'name', 'description','status','edit','delete'];
	dataSource: MatTableDataSource<VarietyData>;

	@ViewChild(MatPaginator) paginator: MatPaginator;
	@ViewChild(MatSort) sort: MatSort;


	constructor
	(
		private dialogService: DialogService,
		private snackBar: SnackBarService
	)
	{
		this.variety = [
	      {id:"1",name:"Easy",description:"LAVADORA 11 KG",status:"A"},
	      {id:"2",name:"Mabe",description:"ESTUFA 30",status:"A"},
	      {id:"2",name:"Dace",description:"AIRE ACONDICIONADO",status:"A"},
	    ];

		this.dataSource = new MatTableDataSource(this.variety);
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
		this.dialogService.openConfirmDialog('¿Estás seguro de eliminar la Variedad '+id+' ?').afterClosed().subscribe(res=>{
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
