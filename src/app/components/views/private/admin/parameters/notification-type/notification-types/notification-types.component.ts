import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { DialogService } from '../../../../../../../core/services/dialog.service';
import { SnackBarService } from '../../../../../../../core/services/snack-bar.service';

export interface notificationTypeData {
  id: string;
  name: string;
  description: string;
  created_at: string;
  updated_at: string;
  status: string;
}

@Component({
  selector: 'sib-notification-types',
  templateUrl: './notification-types.component.html',
  styleUrls: ['./notification-types.component.scss']
})

export class NotificationTypesComponent implements OnInit {

  public notificationType:any[];
  displayedColumns: string[] = [ 
    'id',
    'name',
    'description',
    'created_at',
    'updated_at',
    'status',
    'edit',
    'delete'];
  dataSource: MatTableDataSource<notificationTypeData>;
  
  @ViewChild(MatPaginator) paginator: MatPaginator;
	@ViewChild(MatSort) sort: MatSort;

  constructor(
    private dialogService: DialogService,
		private snackBar: SnackBarService
  ) { 
    this.notificationType = [
      {id:"1",name:"Tipo 1",description:"Tipo de Notificación 1",created_at:"17/08/2019",updated_at:"17/08/2019",status:"A"},
      {id:"2",name:"Tipo 2",description:"Tipo de Notificación 2",created_at:"17/08/2019",updated_at:"17/08/2019",status:"E"},
    ];

  this.dataSource = new MatTableDataSource(this.notificationType);
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
		this.dialogService.openConfirmDialog('¿Estas seguro de eliminar el Tipo de Notificación '+id+' ?').afterClosed().subscribe(res=>{
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
