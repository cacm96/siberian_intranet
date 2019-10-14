import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { DialogService } from '../../../../../../../core/services/dialog.service';
import { SnackBarService } from '../../../../../../../core/services/snack-bar.service';

export interface calendarWorkerData {
  id: string;
  idAgenda: string;
  user_id: string;
  status: string;
}

@Component({
  selector: 'sib-calendar-workers',
  templateUrl: './calendar-workers.component.html',
  styleUrls: ['./calendar-workers.component.scss']
})
export class CalendarWorkersComponent implements OnInit {

  public calendarWorker:any[];
  displayedColumns: string[] = [ 
    'id',
    'idAgenda',
    'user_id',
    'status',
    'edit',
    'delete'];
  dataSource: MatTableDataSource<calendarWorkerData>;
  
  @ViewChild(MatPaginator) paginator: MatPaginator;
	@ViewChild(MatSort) sort: MatSort;

  constructor(
    private dialogService: DialogService,
		private snackBar: SnackBarService
  ) { 
    this.calendarWorker = [
      {id:"1",idAgenda:"Agenda de Reparación",user_id:"Juan Pérez",status:"A"},
      {id:"2",idAgenda:"Agenda de Mantenimiento",user_id:"Pedro Camejo",status:"E"},
      {id:"2",idAgenda:"Agenda de Garantias",user_id:"Pedro Camejo",status:"E"},
    ];

  this.dataSource = new MatTableDataSource(this.calendarWorker);
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
		this.dialogService.openConfirmDialog('¿Estas seguro de eliminar el Calendario por trabajador '+id+' ?').afterClosed().subscribe(res=>{
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
