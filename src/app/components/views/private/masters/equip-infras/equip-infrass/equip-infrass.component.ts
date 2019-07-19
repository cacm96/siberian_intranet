import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { DialogService } from '../../../../../../core/services/dialog.service';
import { SnackBarService } from '../../../../../../core/services/snack-bar.service';

export interface EquipInfrasData {
  id: string;
  name: string;
  description: string;
  status: string;
  image: string;
}
@Component({
  selector: 'sib-equip-infrass',
  templateUrl: './equip-infrass.component.html',
  styleUrls: ['./equip-infrass.component.scss']
})
export class EquipInfrassComponent implements OnInit {

  public equipInfras:any[];
	displayedColumns: string[] = ['id', 'name', 'description','status','image','edit','delete'];
	dataSource: MatTableDataSource<EquipInfrasData>;

	@ViewChild(MatPaginator) paginator: MatPaginator;
	@ViewChild(MatSort) sort: MatSort;

  constructor(
    private dialogService: DialogService,
		private snackBar: SnackBarService
  ) 
  { 
    this.equipInfras = [
      {id:"1",name:"Pared",description:"Pared de hogares y oficinas",status:"A",image:'url1'},
      {id:"2",name:"Aire Acondicionado	",description:" Aires acondicionados en hogares y oficinas",status:"A",image:'url2'},
      {id:"3",name:"Piso",description:"Piso en los hogares y oficinas	",status:"E",image:'url3'},
    ];

  this.dataSource = new MatTableDataSource(this.equipInfras);

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
		this.dialogService.openConfirmDialog('¿Estás seguro de eliminar el Equipo o la Infraestructura'+id+' ?').afterClosed().subscribe(res=>{
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


