import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { DialogService } from '../../../../../../../core/services/dialog.service';
import { SnackBarService } from '../../../../../../../core/services/snack-bar.service';

export interface Parameter {
  id: string;
  name: string;
  description: string;
  idSubcategory: string;
  status: string;
  
}

@Component({
  selector: 'sib-parameters',
  templateUrl: './parameters.component.html',
  styleUrls: ['./parameters.component.scss']
})
export class ParametersComponent implements OnInit {

  public parameter:any[];
	displayedColumns: string[] = ['id','name','description','idSubcategory','status','edit','delete'];
  dataSource: MatTableDataSource<Parameter>;
  
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;


  constructor(
    private dialogService: DialogService,
    private snackBar: SnackBarService
  ) 
  {
    this.parameter = [
      {id:"1",name:"Marca",description:"La marca que posee el equipo",idSubcategory:"Lavadora",status:"A"},
      {id:"2",name:"Modelo",description:"El Modelo que posee el equipo",idSubcategory:"Cocina",status:"A"},
      {id:"3",name:"Año",description:"Año del equipo",idSubcategory:"Aire Acondicionado",status:"A"},
    ];
      this.dataSource = new MatTableDataSource(this.parameter);
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
		this.dialogService.openConfirmDialog('¿Estás seguro de eliminar el Parámetro'+id+' ?').afterClosed().subscribe(res=>{
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

