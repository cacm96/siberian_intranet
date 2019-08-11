import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { DialogService } from '../../../../../../../core/services/dialog.service';
import { SnackBarService } from '../../../../../../../core/services/snack-bar.service';

export interface ServiceOrderData {
  id: string;
  revision_id: string;
  code: string;
  amount: string;
  discount: string;
  taxes: string;
  warranty_time: string;
  reason: string;
  promotion_id: string;
  status: string;
}

@Component({
  selector: 'sib-service-orders',
  templateUrl: './service-orders.component.html',
  styleUrls: ['./service-orders.component.scss']
})
export class ServiceOrdersComponent implements OnInit {
  
  public serviceOrder: any[];
  displayedColumns: string[] = ['id','revision_id','code','amount','discount','taxes','warranty_time','reason','promotion_id','status','edit','delete'];
  dataSource: MatTableDataSource<ServiceOrderData>;
  
  @ViewChild(MatPaginator) paginator: MatPaginator;
	@ViewChild(MatSort) sort: MatSort;

  constructor(
    private dialogService: DialogService,
		private snackBar: SnackBarService
  ) 
  { 
    this.serviceOrder = [
      {id:"1",revision_id:"123",code:"00964",amount:"10000",discount:"  -20%",taxes:"+30",warranty_time:'60 dias',reason:'Construcción de pared',status:"A"},
      {id:"2",revision_id:"896",code:"00234",amount:"98677",discount:"  -50%",taxes:"+30",warranty_time:'15 dias',reason:'Mantenimiento A/C',status:"E"},
      {id:"3",revision_id:"434",code:"00854",amount:"34532",discount:"  -40%",taxes:"+30",warranty_time:'30 dias',reason:'Reparación Lavadora',status:"A"},
    ];

    this.dataSource = new MatTableDataSource(this.serviceOrder);
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
		this.dialogService.openConfirmDialog('¿Estás seguro de eliminar el detalle de orden de servicio'+id+' ?').afterClosed().subscribe(res=>{
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
