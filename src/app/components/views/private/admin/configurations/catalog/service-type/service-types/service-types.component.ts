import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { DialogService } from '../../../../../../../../core/services/dialog.service';
import { SnackBarService } from '../../../../../../../../core/services/snack-bar.service';

export interface serviceTypeData {
  id: string;
  name: string;
  description: string;
  create_at: string;
  update_at: string;
  status: string;
}

@Component({
  selector: 'sib-service-types',
  templateUrl: './service-types.component.html',
  styleUrls: ['./service-types.component.scss']
})

export class ServiceTypesComponent implements OnInit {

  public serviceType:any[];
  displayedColumns: string[] = [ 
    'id',
    'name',
    'description',
    'created_at',
    'updated_at',
    'status',
    'edit',
    'delete'];
  dataSource: MatTableDataSource<serviceTypeData>;
  
  @ViewChild(MatPaginator) paginator: MatPaginator;
	@ViewChild(MatSort) sort: MatSort;

  constructor(
    private dialogService: DialogService,
		private snackBar: SnackBarService
  ) { 
    this.serviceType = [
      {id:"1",name:"Tipo 1",description:"Tipo de servicio 1",created_at:"17/08/2019",updated_at:"17/08/2019",status:"A"},
      {id:"2",name:"Tipo 2",description:"Tipo de servicio 2",created_at:"17/08/2019",updated_at:"17/08/2019",status:"E"},
    ];

  this.dataSource = new MatTableDataSource(this.serviceType);
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
		this.dialogService.openConfirmDialog('¿Estas seguro de eliminar el Tipo de Servicio '+id+' ?').afterClosed().subscribe(res=>{
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
