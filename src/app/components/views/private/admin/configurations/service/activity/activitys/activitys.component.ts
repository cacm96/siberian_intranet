import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { DialogService } from '../../../../../../../../core/services/dialog.service';
import { SnackBarService } from '../../../../../../../../core/services/snack-bar.service';


export interface ActivityData {
  id: string;
  name: string;
  description: string;
  estimatedTime: string;
  difficultyDegree: string;
  status: string;
}
@Component({
  selector: 'sib-activitys',
  templateUrl: './activitys.component.html',
  styleUrls: ['./activitys.component.scss']
})
export class ActivitysComponent implements OnInit {
  public activity:any[];
	displayedColumns: string[] = ['id', 'name', 'description','estimatedTime','difficultyDegree','status','edit','delete'];
	dataSource: MatTableDataSource<ActivityData>;

	@ViewChild(MatPaginator) paginator: MatPaginator;
	@ViewChild(MatSort) sort: MatSort;
  constructor(
    private dialogService: DialogService,
		private snackBar: SnackBarService
  ) 
  {
    this.activity = [
      {id:"1",name:"Cambiar tarjeta",description:"Cambiar tarjeta electrónica de la nevera",estimatedTime:"2 horas",difficultyDegree:"Bajo", status:"A"},
      {id:"2",name:"Pintar pared",description:"Pintar la pared completa",estimatedTime:" 1 día",difficultyDegree:"Bajo",status:"A"},
      {id:"3",name:"Lijar pared",description:"Lijar la pared completa",estimatedTime:"1 día",difficultyDegree:"Medio",status:"E"},
    ];

  this.dataSource = new MatTableDataSource(this.activity);
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
		this.dialogService.openConfirmDialog('¿Estás seguro de eliminar la Actividad'+id+' ?').afterClosed().subscribe(res=>{
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

