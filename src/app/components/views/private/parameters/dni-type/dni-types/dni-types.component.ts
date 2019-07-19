import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { DialogService } from '../../../../../../core/services/dialog.service';
import { SnackBarService } from '../../../../../../core/services/snack-bar.service';

export interface DniTypeData {
  id: string;
  code: string;
  name: string;
  description: string;
  status: string;
}

@Component({
  selector: 'sib-dni-types',
  templateUrl: './dni-types.component.html',
  styleUrls: ['./dni-types.component.scss']
})

export class DniTypesComponent implements OnInit {

    public dnitype:any[];
	displayedColumns: string[] = ['id','code', 'name', 'description','status','edit','delete'];
	dataSource: MatTableDataSource<DniTypeData>;

	@ViewChild(MatPaginator) paginator: MatPaginator;
	@ViewChild(MatSort) sort: MatSort;


	constructor
	(
		private dialogService: DialogService,
		private snackBar: SnackBarService
	)
	{
		this.dnitype = [
	      {id:"1",code:"1",name:"Cédula",description:"Documento de identidad por cédula",status:"A"},
	      {id:"2",code:"2",name:"Pasaporte",description:"Documento de identidad por pasaporte",status:"E"},
	      {id:"3",code:"3",name:"RIF",description:"Documento de identidad por RIF",status:"A"},
	    ];

		this.dataSource = new MatTableDataSource(this.dnitype);
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
		this.dialogService.openConfirmDialog('¿Estas seguro de eliminar el Tipo Dni '+id+' ?').afterClosed().subscribe(res=>{
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