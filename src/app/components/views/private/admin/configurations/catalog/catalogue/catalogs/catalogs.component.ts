import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { DialogService } from '../../../../../../../../core/services/dialog.service';
import { SnackBarService } from '../../../../../../../../core/services/snack-bar.service';

export interface CatalogueData {
  id: string;
  idServiceType: string;
  idSubcategory: string;
  name: string;
  description: string;
  status: string;
  
}

@Component({
  selector: 'sib-catalogs',
  templateUrl: './catalogs.component.html',
  styleUrls: ['./catalogs.component.scss']
})
export class CatalogsComponent implements OnInit {

  public catalogue:any[];
	displayedColumns: string[] = ['id', 'idServiceType', 'idSubcategory','name','description','status','edit','delete'];
	dataSource: MatTableDataSource<CatalogueData>;

	@ViewChild(MatPaginator) paginator: MatPaginator;
	@ViewChild(MatSort) sort: MatSort;
  constructor
  (
    private dialogService: DialogService,
		private snackBar: SnackBarService
  ) 
  { 
    this.catalogue = [
      {id:"1" ,idServiceType:"Mantenimiento",idSubcategory:"Nevera",name:"Cátalogo 1",description:"Mantenimiento de Neveras",status:"A"},
      {id:"2" ,idServiceType:"Reparación",idSubcategory:"Pared",name:"Cátalogo 2",description:"Reparación de paredes",status:"A"},
      {id:"3" ,idServiceType:"Reparación",idSubcategory:"Lavadora",name:"Cátalogo 3",description:"Mantenimiento de Lavadora",status:"E"},
    ];

  this.dataSource = new MatTableDataSource(this.catalogue);
  }

  ngOnInit()
  {
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
		this.dialogService.openConfirmDialog('¿Estás seguro de eliminar el Catálogo '+id+' ?').afterClosed().subscribe(res=>{
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
