import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { DialogService } from '../../../../../../../core/services/dialog.service';
import { SnackBarService } from '../../../../../../../core/services/snack-bar.service';

export interface ServiceOrderDetailData {
  id: string;
  service_order_id: string;
  service_detail_id: string;
  amount: string;
  duration: string;
  number_workers: string;
  status: string;
}

@Component({
  selector: 'sib-service-order-details',
  templateUrl: './service-order-details.component.html',
  styleUrls: ['./service-order-details.component.scss']
})
export class ServiceOrderDetailsComponent implements OnInit {

  public serviceOrderDetail:any[];
  displayedColumns: string[] = ['id','service_order_id','service_detail_id','amount','duration','number_workers','status','edit','delete'];
  dataSource: MatTableDataSource<ServiceOrderDetailData>;
  
  @ViewChild(MatPaginator) paginator: MatPaginator;
	@ViewChild(MatSort) sort: MatSort;

  constructor(
    private dialogService: DialogService,
		private snackBar: SnackBarService
  ) 
  { 
    this.serviceOrderDetail = [
      {id:"1",service_order_id:"123",service_detail_id:"456",amount:"10000",duration:"1 mes",number_workers:"10",status:"A"},
      {id:"2",service_order_id:"654",service_detail_id:"989",amount:"5546",duration:"20 días",number_workers:"5",status:"E"},
      {id:"3",service_order_id:"876",service_detail_id:"244",amount:"9765",duration:"5 meses",number_workers:"20",status:"A"},
    ];

    this.dataSource = new MatTableDataSource(this.serviceOrderDetail);
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
			} else {
				console.log(res);
			}
		});
	}
}
