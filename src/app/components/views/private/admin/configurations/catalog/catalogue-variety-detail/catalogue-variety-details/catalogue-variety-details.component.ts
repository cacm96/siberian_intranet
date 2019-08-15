import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { DialogService } from '../../../../../../../core/services/dialog.service';
import { SnackBarService } from '../../../../../../../core/services/snack-bar.service';

export interface CatalogueVarietyDetailsData {
  id: string;
  idCatalogue: string;
  idVarietyDetail: string;
  revisionPrice: string;
  status: string;
}

@Component({
  selector: 'sib-catalogue-variety-details',
  templateUrl: './catalogue-variety-details.component.html',
  styleUrls: ['./catalogue-variety-details.component.scss']
})
export class CatalogueVarietyDetailsComponent implements OnInit {

  public catalogueVarietyDetails:any[];
	displayedColumns: string[] = ['id', 'idCatalogue', 'idVarietyDetail','revisionPrice', 'status' , 'edit','delete'];
	dataSource: MatTableDataSource<CatalogueVarietyDetailsData>;

	@ViewChild(MatPaginator) paginator: MatPaginator;
	@ViewChild(MatSort) sort: MatSort;

  constructor(
    private dialogService: DialogService,
		private snackBar: SnackBarService
  ) 
  {
    this.catalogueVarietyDetails = [
      {id:"1" ,idCatalogue:"Catálogo 1",idVarietyDetail:"Modelo 1",revisionPrice:"100.000",status:"A"},
      {id:"2" ,idCatalogue:"Catálogo 2",idVarietyDetail:"Modelo 6",revisionPrice:"150.000",status:"A"},
      {id:"3" ,idCatalogue:"Catálogo 3",idVarietyDetail:"Modelo 10",revisionPrice:"200.000",status:"E"},
    ];

  this.dataSource = new MatTableDataSource(this.catalogueVarietyDetails);
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
		this.dialogService.openConfirmDialog('¿Estás seguro de eliminar el Catálogo Detalle Variedad'+id+' ?').afterClosed().subscribe(res=>{
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

