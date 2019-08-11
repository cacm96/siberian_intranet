import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { DialogService } from '../../../../../../../core/services/dialog.service';
import { SnackBarService } from '../../../../../../../core/services/snack-bar.service';

export interface calendarTypeData {
  id: string;
  name: string;
  description: string;
  status: string;
}

@Component({
  selector: 'sib-calendar-types',
  templateUrl: './calendar-types.component.html',
  styleUrls: ['./calendar-types.component.scss']
})
export class CalendarTypesComponent implements OnInit {

  public calendarType:any[];
  displayedColumns: string[] = [ 
    'id',
    'name',
    'description',
    'status',
    'edit',
    'delete'];
  dataSource: MatTableDataSource<calendarTypeData>;
  
  @ViewChild(MatPaginator) paginator: MatPaginator;
	@ViewChild(MatSort) sort: MatSort;

  constructor(
    private dialogService: DialogService,
		private snackBar: SnackBarService
  ) { 
    this.calendarType = [
      {id:"1",name:"Calendario Reparación",description:"Actividades de Reparación",status:"A"},
      {id:"2",name:"Calendario Mantenimiento",description:"Actividades de Mantenimiento",status:"E"},
    ];

  this.dataSource = new MatTableDataSource(this.calendarType);
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
		this.dialogService.openConfirmDialog('¿Estas seguro de eliminar el Tipo de Calendario '+id+' ?').afterClosed().subscribe(res=>{
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
