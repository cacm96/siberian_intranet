import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { DialogService } from '../../../../../../core/services/dialog.service';
import { SnackBarService } from '../../../../../../core/services/snack-bar.service';

export interface ServiceDetailData {
  id: string;
  name: string;
  idComponent: string;
  estimated_price: string;
  note: string;
  estimated_warranty_time: string;
  status: string;
  idEquipinfras: string;
  idCatalogue: string;
}

@Component({
  selector: 'sib-service-details',
  templateUrl: './service-details.component.html',
  styleUrls: ['./service-details.component.scss']
})

export class ServiceDetailsComponent implements OnInit {

  public serviceDetail:any[];
  displayedColumns: string[] = [ 
    'id',
    'name',
    'idComponent',
    'estimated_price',
    'note',
    'estimated_warranty_time',
    'idEquipinfras',
    'idCatalogue',
    'status',
    'edit',
    'delete'];
  dataSource: MatTableDataSource<ServiceDetailData>;
  
  @ViewChild(MatPaginator) paginator: MatPaginator;
	@ViewChild(MatSort) sort: MatSort;

  constructor(
    private dialogService: DialogService,
		private snackBar: SnackBarService
  ) { 
    this.serviceDetail = [
      {id:"1",name:"Reparación de cocina",idComponent:"Hornilla",estimated_price: "20000bs",note:"Urgente",estimated_warranty_time:"7 Dias",idEquipinfras:"Cocina",idCatalogue:"Linea Blanca",status:"A"},
      {id:"2",name:"Reparación de nevera",idComponent:"Motor",estimated_price:"35000bs",note:"Sin prisa",estimated_warranty_time:"25 Día",idEquipinfras:"Nevera",idCatalogue:"Linea Blanca",status:"E"},
    ];

  this.dataSource = new MatTableDataSource(this.serviceDetail);
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
		this.dialogService.openConfirmDialog('¿Estas seguro de eliminar el Detalle de Servicio '+id+' ?').afterClosed().subscribe(res=>{
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
