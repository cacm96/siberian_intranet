import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource} from '@angular/material/table';
import { DialogService } from '../../../../../../../core/services/dialog.service';
import { SnackBarService } from '../../../../../../../core/services/snack-bar.service';

export interface RoleFunctionData {
  id: string;
  rol_id: string;
  function_id: string;
  created_at: string;
  update_at: string;
  status: string;

}

@Component({
  selector: 'sib-role-functions',
  templateUrl: './role-functions.component.html',
  styleUrls: ['./role-functions.component.scss']
})
export class RoleFunctionsComponent implements OnInit {

	public RoleFunction:any[];
	displayedColumns: string[] = ['id', 'rol_id', 'function_id','created_at','updated_at','status','edit','delete'];
	dataSource: MatTableDataSource<RoleFunctionData>;

	@ViewChild(MatPaginator) paginator: MatPaginator;
	@ViewChild(MatSort) sort: MatSort;

  constructor
  (
	  	private dialogService: DialogService,
		private snackBar: SnackBarService
  ) 
  {
  		this.RoleFunction = [
	      {id:"1",rol_id:"01",function_id:"01 ",created_at:"12/08/19 ",updated_at:"12/08/19 ",status:"A"},
	      {id:"2",rol_id:"02",function_id:"02 ",created_at:"12/08/19 ",updated_at:"12/08/19 ",status:"E"}, 
	    ];

		this.dataSource = new MatTableDataSource(this.RoleFunction);
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
		this.dialogService.openConfirmDialog('¿Estas seguro de eliminar el Rol de Función '+id+' ?').afterClosed().subscribe(res=>{
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

