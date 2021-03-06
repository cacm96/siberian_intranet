import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { DialogService } from '../../../../../../../../core/services/dialog.service';
import { SnackBarService } from '../../../../../../../../core/services/snack-bar.service';

export interface ServiceDetailPoliticData {
  id: string;
  idServiceDetail: string;
  idPolitic: string;
}

@Component({
  selector: 'sib-service-detail-politics',
  templateUrl: './service-detail-politics.component.html',
  styleUrls: ['./service-detail-politics.component.scss']
})
export class ServiceDetailPoliticsComponent implements OnInit {
  public serviceDetailPolitic:any[];
  displayedColumns: string[] = [ 
    'id',
    'idServiceDetail',
    'idPolitic',
    'edit',
    'delete'];
  dataSource: MatTableDataSource<ServiceDetailPoliticData>;
  
  @ViewChild(MatPaginator) paginator: MatPaginator;
	@ViewChild(MatSort) sort: MatSort;

  constructor(
    private dialogService: DialogService,
		private snackBar: SnackBarService
  ) { 
    this.serviceDetailPolitic = [
      {id:"1",idServiceDetail:"Reparación de Cocina",idPolitic:"Política 1",status:"A"},
      {id:"2",idServiceDetail:"Reparación de Nevera",idPolitic:"Política 2",status:"E"},
    ];

  this.dataSource = new MatTableDataSource(this.serviceDetailPolitic);
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
		this.dialogService.openConfirmDialog('¿Estas seguro de eliminar el Detalle de Servicio Política '+id+' ?').afterClosed().subscribe(res=>{
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
