import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { DialogService } from '../../../../../../core/services/dialog.service';
import { SnackBarService } from '../../../../../../core/services/snack-bar.service';

export interface RoleFunctionData {
  id: string;
  name: string;
  description: string;
  status: string;
}


@Component({
  selector: 'sib-role-functions',
  templateUrl: './role-functions.component.html',
  styleUrls: ['./role-functions.component.scss']
})
export class RoleFunctionsComponent implements OnInit {

  public rolefunction:any[];
	displayedColumns: string[] = ['id', 'name', 'description','status','edit','delete'];
	dataSource: MatTableDataSource<RoleFunctionData>;

	@ViewChild(MatPaginator) paginator: MatPaginator;
	@ViewChild(MatSort) sort: MatSort;

  constructor
  (
	  	private dialogService: DialogService,
		private snackBar: SnackBarService
  ) 
  {
  		this.rolefunction = [
	      {id:"1",name:"0251-2130987",description:"Jose",status:"A"},
	       {id:"2",name:"0416-2130987",description:"Maria",status:"A"},
	    ];

		this.dataSource = new MatTableDataSource(this.rolefunction);
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
		this.dialogService.openConfirmDialog('¿Estas seguro de eliminar Rol de Función '+id+' ?').afterClosed().subscribe(res=>{
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
