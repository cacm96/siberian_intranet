import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { DialogService } from '../../../../../../core/services/dialog.service';
import { SnackBarService } from '../../../../../../core/services/snack-bar.service';

export interface SubCategoriesData {
  id: string;
  idCategory: string;
  name: string;
  description: string;
  status: string;
}
@Component({
  selector: 'sib-sub-categories',
  templateUrl: './sub-categories.component.html',
  styleUrls: ['./sub-categories.component.scss']
})
export class SubCategoriesComponent implements OnInit {

 	public subCategories:any[];
	displayedColumns: string[] = ['id','idCategory', 'name', 'description','status','edit','delete'];
	dataSource: MatTableDataSource<SubCategoriesData>;

	@ViewChild(MatPaginator) paginator: MatPaginator;
	@ViewChild(MatSort) sort: MatSort;

	constructor
	(
		private dialogService: DialogService,
		private snackBar: SnackBarService
	)
	{
		this.subCategories = [
	      {id:"1",idCategory:"Línea Blanca",name:"Lavadora",description:"Línea Blanca",status:"A"},
	      {id:"2",idCategory:"Línea Blanca",name:"Cocina",description:"Línea Blanca",status:"E"},
	      {id:"3",idCategory:"Línea Blanca",name:"Aire Acondicionado",description:"Línea Blanca",status:"A"},
	    ];

		this.dataSource = new MatTableDataSource(this.subCategories);
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
		this.dialogService.openConfirmDialog('¿Estas seguro de eliminar la Subcategoría '+id+' ?').afterClosed().subscribe(res=>{
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
