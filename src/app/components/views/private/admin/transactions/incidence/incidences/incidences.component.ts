import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { DialogService } from '../../../../../../../core/services/dialog.service';
import { SnackBarService } from '../../../../../../../core/services/snack-bar.service';

export interface incidenceData {
  id: string;
  idCalendar: string;
  typeAuthor: string;
  author_id: string;
  idMotive: string;
  motiveDescription: string;
  status: string;
}

@Component({
  selector: 'sib-incidences',
  templateUrl: './incidences.component.html',
  styleUrls: ['./incidences.component.scss']
})
export class IncidencesComponent implements OnInit {

  public incidence:any[];
  displayedColumns: string[] = [ 
    'id',
    'idCalendar',
    'typeAuthor',
    'author_id',
    'idMotive',
    'motiveDescription',
    'status',
    'edit',
    'delete'];
  dataSource: MatTableDataSource<incidenceData>;
  
  @ViewChild(MatPaginator) paginator: MatPaginator;
	@ViewChild(MatSort) sort: MatSort;

  constructor(
    private dialogService: DialogService,
		private snackBar: SnackBarService
  ) { 
    this.incidence = [
      {id:"1",idCalendar:"Agenda de Reparación",typeAuthor:"Prestador",author_id:"Juan Pérez",idMotive:"Reposo",motiveDescription:"Reposo por enfermedad",status:"A"},
      {id:"2",idCalendar:"Agenda de Mantenimiento",typeAuthor:"Cliente",author_id:"María Torres",idMotive:"Posponer",motiveDescription:"No habra gente en casa",status:"E"},
    ];

  this.dataSource = new MatTableDataSource(this.incidence);
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
		this.dialogService.openConfirmDialog('¿Estas seguro de eliminar la Incidencia '+id+' ?').afterClosed().subscribe(res=>{
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
