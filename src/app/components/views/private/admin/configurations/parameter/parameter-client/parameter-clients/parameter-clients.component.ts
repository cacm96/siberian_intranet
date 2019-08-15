import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource} from '@angular/material/table';
import { DialogService } from '../../../../../../../core/services/dialog.service';
import { SnackBarService } from '../../../../../../../core/services/snack-bar.service';

export interface ParameterClientData {
  id: string;
  parameter_id: string;
  parameter_value: string;
  client_id: string;
  created_at: string;
  update_at: string;
  status: string;

}

@Component({
  selector: 'sib-parameter-clients',
  templateUrl: './parameter-clients.component.html',
  styleUrls: ['./parameter-clients.component.scss']
})


export class ParameterClientsComponent implements OnInit {

	public ParameterClient:any[];
	displayedColumns: string[] = ['id', 'parameter_id', 'parameter_value','client_id','created_at','updated_at','status','edit','delete'];
	dataSource: MatTableDataSource<ParameterClientData>;

	@ViewChild(MatPaginator) paginator: MatPaginator;
	@ViewChild(MatSort) sort: MatSort;

  constructor
  (
	  	private dialogService: DialogService,
		private snackBar: SnackBarService
  ) 
  {
  		this.ParameterClient = [
	      {id:"1",parameter_id:"parametro 1",parameter_value:"parameter value 1 ",client_id:"01 ",created_at:"12/08/19 ",updated_at:"12/08/19 ",status:"A"},
	      {id:"2",parameter_id:"parametro 2",parameter_value:"parameter value 2 ",client_id:"02 ",created_at:"12/08/19 ",updated_at:"12/08/19 ",status:"E"},
	    ];

		this.dataSource = new MatTableDataSource(this.ParameterClient);
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
		this.dialogService.openConfirmDialog('¿Estas seguro de eliminar el Parametro del Cliente '+id+' ?').afterClosed().subscribe(res=>{
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

