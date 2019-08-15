import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { DialogService } from '../../../../../../../../core/services/dialog.service';
import { SnackBarService } from '../../../../../../../../core/services/snack-bar.service';

export interface PromotionCatalogueData {
  id: string;
  promotion_id: string;
  catalogue_id: string;
  create_at: Date;
  update_at: Date;
  status: string;
}
@Component({
  selector: 'sib-promotion-catalogs',
  templateUrl: './promotion-catalogs.component.html',
  styleUrls: ['./promotion-catalogs.component.scss']
})
export class PromotionCatalogsComponent implements OnInit {

  public PromotionCatalogue:any[];
	displayedColumns: string[] = ['id', 'catalogue_id', 'promotion_id', 'status' , 'edit','delete'];
	dataSource: MatTableDataSource<PromotionCatalogueData>;

	@ViewChild(MatPaginator) paginator: MatPaginator;
	@ViewChild(MatSort) sort: MatSort;

  constructor(
    private dialogService: DialogService,
		private snackBar: SnackBarService
  ) 
  {
    this.PromotionCatalogue = [
      {id:"1",promotion_id:"Promoción 1",catalogue_id:"Catálogo 1",status:"A"},
      {id:"2",promotion_id:"Promoción 2",catalogue_id:"Catálogo 2",status:"A"},
      {id:"3",promotion_id:"Promoción 3",catalogue_id:"Catálogo 3",status:"E"},
    ];

  this.dataSource = new MatTableDataSource(this.PromotionCatalogue);
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
		this.dialogService.openConfirmDialog('¿Estás seguro de eliminar la Promoción/Catálogo'+id+' ?').afterClosed().subscribe(res=>{
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
