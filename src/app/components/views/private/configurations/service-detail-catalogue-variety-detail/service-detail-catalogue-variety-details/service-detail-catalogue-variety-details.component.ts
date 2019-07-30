import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { DialogService } from '../../../../../../core/services/dialog.service';
import { SnackBarService } from '../../../../../../core/services/snack-bar.service';

export interface ServiceDetailCatalogueVariedadDetailData {
  id: string;
  idCatalogue_VarietyDetail: string;
  idServiceDetail: string;
  status: string;
}

@Component({
  selector: 'sib-service-detail-catalogue-variety-details',
  templateUrl: './service-detail-catalogue-variety-details.component.html',
  styleUrls: ['./service-detail-catalogue-variety-details.component.scss']
})

export class ServiceDetailCatalogueVarietyDetailsComponent implements OnInit {
  public serviceDetailCatalogueVariedadDetail:any[];
  displayedColumns: string[] = [ 
    'id',
    'idCatalogue_VarietyDetail',
    'idServiceDetail',
    'status',
    'edit',
    'delete'];
  dataSource: MatTableDataSource<ServiceDetailCatalogueVariedadDetailData>;
  
  @ViewChild(MatPaginator) paginator: MatPaginator;
	@ViewChild(MatSort) sort: MatSort;

  constructor(
    private dialogService: DialogService,
		private snackBar: SnackBarService
  ) { 
    this.serviceDetailCatalogueVariedadDetail = [
      {id:"1",idCatalogue_VarietyDetail:"Variedad 1",idServiceDetail:"Reparación de Cocina",status:"A"},
      {id:"2",idCatalogue_VarietyDetail:"Variedad 2",idServiceDetail:"Reparación de Nevera",status:"E"},
    ];

  this.dataSource = new MatTableDataSource(this.serviceDetailCatalogueVariedadDetail);
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
		this.dialogService.openConfirmDialog('¿Estas seguro de eliminar el Detalle de Servicio por Catálogo y Detalle de Variedad '+id+' ?').afterClosed().subscribe(res=>{
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
