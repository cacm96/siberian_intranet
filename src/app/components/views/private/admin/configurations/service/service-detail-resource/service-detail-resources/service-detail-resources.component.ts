import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { DialogService } from '../../../../../../../../core/services/dialog.service';
import { SnackBarService } from '../../../../../../../../core/services/snack-bar.service';

export interface ServiceDetailResourceData {
  id: string;
  resource_id: string;
  service_detail_id: string;
  quantity: string;
  status: string;
}

@Component({
  selector: 'sib-service-detail-resources',
  templateUrl: './service-detail-resources.component.html',
  styleUrls: ['./service-detail-resources.component.scss']
})
export class ServiceDetailResourcesComponent implements OnInit {
  public serviceDetailResource:any[];
  displayedColumns: string[] = [ 
    'id',
    'resource_id',
    'service_detail_id',
    'quantity',
    'status',
    'edit',
    'delete'];
  dataSource: MatTableDataSource<ServiceDetailResourceData>;
  
  @ViewChild(MatPaginator) paginator: MatPaginator;
	@ViewChild(MatSort) sort: MatSort;

  constructor(
    private dialogService: DialogService,
		private snackBar: SnackBarService
  ) { 
    this.serviceDetailResource = [
      {id:"1",resource_id:"Jabon",service_detail_id:"Reparación de Cocina",quantity: "50 Gramos",status:"A"},
      {id:"2",resource_id:"Tornillo con Tuerca",service_detail_id:"Reparación de Nevera",quantity:"4 Unidades",status:"E"},
    ];

  this.dataSource = new MatTableDataSource(this.serviceDetailResource);
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
		this.dialogService.openConfirmDialog('¿Estas seguro de eliminar el Detalle de Servicio Recurso '+id+' ?').afterClosed().subscribe(res=>{
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
