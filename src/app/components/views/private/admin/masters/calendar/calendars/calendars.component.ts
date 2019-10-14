import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { DialogService } from '../../../../../../../core/services/dialog.service';
import { SnackBarService } from '../../../../../../../core/services/snack-bar.service';

export interface CalendarData {
  id: string;
  idCalendarType: string;
  idRevision_idService: string;
  date: string;
  hour_init: string;
  hour_end: string;
  status: string;
}

@Component({
  selector: 'sib-calendars',
  templateUrl: './calendars.component.html',
  styleUrls: ['./calendars.component.scss']
})

export class CalendarsComponent implements OnInit {

	public calendar:any[];
	displayedColumns: string[] = ['id','idCalendarType','idRevision_idService','date', 'hour_init','hour_end','status','edit','delete'];
	dataSource: MatTableDataSource<CalendarData>;

	@ViewChild(MatPaginator) paginator: MatPaginator;
	@ViewChild(MatSort) sort: MatSort;


	constructor
	(
		private dialogService: DialogService,
		private snackBar: SnackBarService
	)
	{
		this.calendar = [
	      {id:"1",idCalendarType:"1",idRevision_idService:"1",date:"10/08/2019",hour_init:"09:35",hour_end:"17:00",status:"A"},
	      {id:"2",idCalendarType:"2",idRevision_idService:"2",date:"10/08/2019",hour_init:"09:35",hour_end:"17:00",status:"A"},
	      {id:"3",idCalendarType:"3",idRevision_idService:"1",date:"10/08/2019",hour_init:"09:35",hour_end:"17:00",status:"A"},
	    ];

		this.dataSource = new MatTableDataSource(this.calendar);
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
		this.dialogService.openConfirmDialog('¿Estás seguro de eliminar el Calendario '+id+' ?').afterClosed().subscribe(res=>{
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