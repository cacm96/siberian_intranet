import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { DialogService } from '../../../../../../core/services/dialog.service';
import { SnackBarService } from '../../../../../../core/services/snack-bar.service';

export interface WorkerData {
  id: string;
  firstName: string;
  lastName: string;
  idUser: string;
  dniType: string;
  dni: string;
  gender: string;
  dateBirth: string;
  note: string;
  status: string;
}

@Component({
  selector: 'sib-workers',
  templateUrl: './workers.component.html',
  styleUrls: ['./workers.component.scss']
})
export class WorkersComponent implements OnInit {

  	public worker:any[];
	displayedColumns: string[] = ['id','firstName','lastName','idUser',
	'dniType','dni','gender','dateBirth','note','status','edit','delete'];
	dataSource: MatTableDataSource<WorkerData>;

	@ViewChild(MatPaginator) paginator: MatPaginator;
	@ViewChild(MatSort) sort: MatSort;

	constructor
	(
		private dialogService: DialogService,
		private snackBar: SnackBarService
	)
	{
		this.worker = [
	      {id:"1",firstName:"María",lastName:"Ramos",idUser:"maría@gmail.com",dniType:"Cédula de Identidad",dni:"24.537.115",gender:"Femenino",dateBirth:"01/02/1995",note:"Buen Empleado",status:"A"},
	      {id:"2",firstName:"Reinaldo",lastName:"Pérez",idUser:"rey@gmail.com",dniType:"Cédula de Identidad",dni:"16.123.555",gender:"Masculino",dateBirth:"02/10/1985",note:"Buen Empleado",status:"E"},
	      {id:"3",firstName:"Yalitza",lastName:"Prieto",idUser:"yalitza@gmail.com",dniType:"Cédula de Identidad",dni:"18.333.333",gender:"Femenino",dateBirth:"22/06/1988",note:"Buen Empleado",status:"A"},
	    ];

		this.dataSource = new MatTableDataSource(this.worker);
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
		this.dialogService.openConfirmDialog('¿Estás seguro de eliminar el Empleado '+id+' ?').afterClosed().subscribe(res=>{
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