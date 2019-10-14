import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { DialogService } from '../../../../../../../../core/services/dialog.service';
import { SnackBarService } from '../../../../../../../../core/services/snack-bar.service';

export interface ServiceDetailActivityData {
  id: string;
  service_detail_id: string;
  activity_id: string;
}

@Component({
  selector: 'sib-service-detail-activitys',
  templateUrl: './service-detail-activitys.component.html',
  styleUrls: ['./service-detail-activitys.component.scss']
})
export class ServiceDetailActivitysComponent implements OnInit {
  
  public serviceDetailActivity:any[];
  displayedColumns: string[] = [ 
    'id',
    'service_detail_id',
    'activity_id',
    'edit',
    'delete'];
  dataSource: MatTableDataSource<ServiceDetailActivityData>;
  
  @ViewChild(MatPaginator) paginator: MatPaginator;
	@ViewChild(MatSort) sort: MatSort;

  constructor(
    private dialogService: DialogService,
		private snackBar: SnackBarService
  ) { 
    this.serviceDetailActivity = [
      {id:"1",service_detail_id:"Reparación de Cocina",activity_id:"Limpieza de Hornilla"},
      {id:"2",service_detail_id:"Reparación de Nevera",activity_id:"Desmontar Motor"},
    ];

  this.dataSource = new MatTableDataSource(this.serviceDetailActivity);
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
		this.dialogService.openConfirmDialog('¿Estas seguro de eliminar el Detalle de Servicio Actividad '+id+' ?').afterClosed().subscribe(res=>{
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
