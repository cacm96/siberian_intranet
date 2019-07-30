import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { DialogService } from '../../../../../../core/services/dialog.service';
import { SnackBarService } from '../../../../../../core/services/snack-bar.service';

export interface ServiceDetailActivityData {
  id: string;
  service_detail_id: string;
  activity_id: string;
  created_at: string;
  estimated_time: string;
  difficulty_degree: string;
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
    'created_at',
    'estimated_time',
    'difficulty_degree',
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
      {id:"1",service_detail_id:"Reparación de Cocina",activity_id:"Limpieza de Hornilla",created_at: "04/07/2019",estimated_time:"2 Horas",difficulty_degree:"Bajo"},
      {id:"2",service_detail_id:"Reparación de Nevera",activity_id:"Desmontar Motor",created_at:"01/07/2019",estimated_time:"1 Día",difficulty_degree:"Alto"},
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
		this.dialogService.openConfirmDialog('¿Estas seguro de eliminar el Detalle de Servicio por Actividad '+id+' ?').afterClosed().subscribe(res=>{
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
