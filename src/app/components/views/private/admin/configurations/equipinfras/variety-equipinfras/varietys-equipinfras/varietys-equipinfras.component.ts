import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { DialogService } from '../../../../../../../../core/services/dialog.service';
import { SnackBarService } from '../../../../../../../../core/services/snack-bar.service';

export interface VarietyEquipInfrasData {
  id: string;
  idVariety: string;
  idEquipInfras: string;
  name: string;
  description: string;
  status: string;
}

@Component({
  selector: 'sib-varietys-equipinfras',
  templateUrl: './varietys-equipinfras.component.html',
  styleUrls: ['./varietys-equipinfras.component.scss']
})

export class VarietysEquipinfrasComponent implements OnInit {

    public varietyEquipInfras:any[];
	displayedColumns: string[] = ['id','idVariety', 'idEquipInfras', 'name', 'description','status','edit','delete'];
	dataSource: MatTableDataSource<VarietyEquipInfrasData>;

	@ViewChild(MatPaginator) paginator: MatPaginator;
	@ViewChild(MatSort) sort: MatSort;


	constructor
	(
		private dialogService: DialogService,
		private snackBar: SnackBarService
	)
	{
		this.varietyEquipInfras = [
	      {id:"1",idVariety:" Silensis-Cerapy",idEquipInfras:"Pared",name:"Pared",description:"Pared de ladrillo",status:"A"},
	      {id:"2",idVariety:"Avanti",idEquipInfras:"Piso",name:"Piso",description:"Piso de porcelana",status:"A"},
	      {id:"2",idVariety:"Dace",idEquipInfras:"Aire Acondicionado",name:"Aire Acondicionado",description:"AIRE ACONDICIONADO",status:"A"},
	    ];

		this.dataSource = new MatTableDataSource(this.varietyEquipInfras);
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
		this.dialogService.openConfirmDialog('¿Estás seguro de eliminar la Variedad por Equipos/Infraestructuras '+id+' ?').afterClosed().subscribe(res=>{
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