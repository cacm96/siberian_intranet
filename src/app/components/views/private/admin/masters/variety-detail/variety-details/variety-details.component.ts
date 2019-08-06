import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { DialogService } from '../../../../../../../core/services/dialog.service';
import { SnackBarService } from '../../../../../../../core/services/snack-bar.service';

export interface VarietyDetailData {
  id: string;
  idVariety: string;
  name: string;
  description: string;
  image: string;
  status: string;
}

@Component({
  selector: 'sib-variety-details',
  templateUrl: './variety-details.component.html',
  styleUrls: ['./variety-details.component.scss']
})
export class VarietyDetailsComponent implements OnInit {

    public varietyDetail:any[];
	displayedColumns: string[] = ['id','idVariety', 'name', 'description', 'image','status','edit','delete'];
	dataSource: MatTableDataSource<VarietyDetailData>;

	@ViewChild(MatPaginator) paginator: MatPaginator;
	@ViewChild(MatSort) sort: MatSort;


	constructor
	(
		private dialogService: DialogService,
		private snackBar: SnackBarService
	)
	{
		this.varietyDetail = [
	      {id:"1",idVariety:"Easy",name:"LED-1132B",description:"LAVADORA 11 KG",image:"Imagen1",status:"A"},
	      {id:"2",idVariety:"Mabe",name:"EM7620BAP",description:"ESTUFA 30",image:"Imagen2",status:"A"},
	      {id:"2",idVariety:"Dace",name:"EMPRN121",description:"AIRE ACONDICIONADO",image:"Imagen3",status:"A"},
	    ];

		this.dataSource = new MatTableDataSource(this.varietyDetail);
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
		this.dialogService.openConfirmDialog('¿Estás seguro de eliminar el Detalle Variedad '+id+' ?').afterClosed().subscribe(res=>{
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