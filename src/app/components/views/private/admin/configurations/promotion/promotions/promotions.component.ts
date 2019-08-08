import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { DialogService } from '../../../../../../../core/services/dialog.service';
import { SnackBarService } from '../../../../../../../core/services/snack-bar.service';


export interface PromotionData {
  id: string;
  name: string;
  description: string;
  percentDiscount: string;
  create_at: string;
  update_at: string;
  date_init: string;
  date_end: string;
  idSubcategory: string;
  image: string;
  status: string;
}

@Component({
  selector: 'sib-promotions',
  templateUrl: './promotions.component.html',
  styleUrls: ['./promotions.component.scss']
})
export class PromotionsComponent implements OnInit {

  public promotion:any[];
	displayedColumns: string[] = ['id', 'name', 'description','percentDiscount','idSubcategory','date_init','date_end','image','status','edit','delete'];
	dataSource: MatTableDataSource<PromotionData>;

	@ViewChild(MatPaginator) paginator: MatPaginator;
	@ViewChild(MatSort) sort: MatSort;
  constructor
  (
    private dialogService: DialogService,
		private snackBar: SnackBarService
  ) 
  { 
    this.promotion = [
      {id:"1" ,name:"Descuento Mes de las madres",description:"Descuento por el mes de mayo en el mantenimiento de Neveras",percentDiscount:"15%",idSubcategory:"Nevera",date_init: "01-05-2020",date_end: "31-05-2020",image:"url1",status:"A",},
      {id:"2" ,name:"Descuento de linea blanca",description:"Descuento en todas nuestros servicio de linea blanca",percentDiscount:"10%",idSubcategory:"cocina",date_init: "01-06-2020",date_end: "05-06-2020",image:"url1",status:"A",},
      {id:"3" ,name:"Descuento decembrinas",description:"Descuento en el mes de diciembre en servicio de pintura",percentDiscount:"15%",idSubcategory:"Pared",date_init: "31-12-2019",date_end: "31-12-2019",image:"url1",status:"A",},
    ];

  this.dataSource = new MatTableDataSource(this.promotion);
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
		this.dialogService.openConfirmDialog('¿Estás seguro de eliminar la promoción '+id+' ?').afterClosed().subscribe(res=>{
			if (res==true) {
				console.log(id);
				this.snackBar.openSnackBar('Eliminada Correctamente','¿Deshacer?').onAction().subscribe(() => {
				  console.log('Recuperado');
				});
			}else{
				console.log(res);
			}
		});
	}
}
