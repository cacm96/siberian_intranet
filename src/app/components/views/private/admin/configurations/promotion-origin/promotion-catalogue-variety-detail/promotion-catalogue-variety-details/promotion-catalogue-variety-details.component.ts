import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { DialogService } from '../../../../../../../../core/services/dialog.service';
import { SnackBarService } from '../../../../../../../../core/services/snack-bar.service';

export interface PromotionCatalogueVarietyDetailsData {
  id: string;
  catalogue_variety_detail_id: string;
  service_detail_id: string;
  create_at: string;
  update_at: string;
  status: string;

}
@Component({
  selector: 'sib-promotion-catalogue-variety-details',
  templateUrl: './promotion-catalogue-variety-details.component.html',
  styleUrls: ['./promotion-catalogue-variety-details.component.scss']
})
export class PromotionCatalogueVarietyDetailsComponent implements OnInit {

  public PromotionCatalogueVarietyDetails:any[];
	displayedColumns: string[] = ['id', 'catalogue_variety_detail_id', 'service_detail_id', 'status' , 'edit','delete'];
	dataSource: MatTableDataSource<PromotionCatalogueVarietyDetailsData>;

	@ViewChild(MatPaginator) paginator: MatPaginator;
	@ViewChild(MatSort) sort: MatSort;

  constructor(
    private dialogService: DialogService,
		private snackBar: SnackBarService
  ) 
  {
    this.PromotionCatalogueVarietyDetails = [
      {id:"1",catalogue_variety_detail_id:"Detalle catálogo 1",service_detail_id:"Detalle servicio 1",status:"A"},
      {id:"2",catalogue_variety_detail_id:"Detalle catálogo 2",service_detail_id:"Detalle servicio 2",status:"A"},
      {id:"3",catalogue_variety_detail_id:"Detalle catálogo 3",service_detail_id:"Detalle servicio 3",status:"E"},
    ];

  this.dataSource = new MatTableDataSource(this.PromotionCatalogueVarietyDetails);
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
		this.dialogService.openConfirmDialog('¿Estás seguro de eliminar la Promoción Catálogo variedad detalle'+id+' ?').afterClosed().subscribe(res=>{
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
