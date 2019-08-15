import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { DialogService } from '../../../../../../../core/services/dialog.service';
import { SnackBarService } from '../../../../../../../core/services/snack-bar.service';

export interface Politic {
  id: string;
  name: string;
  description: string;
  actionPlan: string;
  status: string;
  
}
@Component({
  selector: 'sib-politics',
  templateUrl: './politics.component.html',
  styleUrls: ['./politics.component.scss']
})
export class PoliticsComponent implements OnInit {

  public politic:any[];
	displayedColumns: string[] = ['id','name','description','actionPlan','status','edit','delete'];
  dataSource: MatTableDataSource<Politic>;
  
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;


  constructor(
    private dialogService: DialogService,
    private snackBar: SnackBarService
  ) 
  
  { 

    this.politic = [
      {id:"1",name:"Política 1",description:"El tiempo de duración del servicio",actionPlan:"Plan de acción de la política 1",status:"A"},
      {id:"2",name:"Política 2",description:"Cantidad de trabajadores",actionPlan:"Plan de acción de la política 2",status:"A"},
      {id:"3",name:"Política 3",description:"El tiempo de garantía del equipo",actionPlan:"Plan de acción de la política 3",status:"A"},
    ];
      this.dataSource = new MatTableDataSource(this.politic);
  
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
		this.dialogService.openConfirmDialog('¿Estás seguro de eliminar la Política'+id+' ?').afterClosed().subscribe(res=>{
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
