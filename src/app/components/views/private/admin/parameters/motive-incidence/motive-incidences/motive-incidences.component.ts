import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { DialogService } from '../../../../../../../core/services/dialog.service';
import { SnackBarService } from '../../../../../../../core/services/snack-bar.service';

export interface motiveIncidenceData {
  id: string;
  name: string;
  description: string;
  status: string;
}

@Component({
  selector: 'sib-motive-incidences',
  templateUrl: './motive-incidences.component.html',
  styleUrls: ['./motive-incidences.component.scss']
})
export class MotiveIncidencesComponent implements OnInit {

  public motiveIncidence:any[];
  displayedColumns: string[] = [ 
    'id',
    'name',
    'description',
    'status',
    'edit',
    'delete'];
  dataSource: MatTableDataSource<motiveIncidenceData>;
  
  @ViewChild(MatPaginator) paginator: MatPaginator;
	@ViewChild(MatSort) sort: MatSort;

  constructor(
    private dialogService: DialogService,
		private snackBar: SnackBarService
  ) { 
    this.motiveIncidence = [
      {id:"1",name:"Posponer",description:"Cambio de fecha indisposición",status:"A"},
      {id:"2",name:"Reposo",description:"Cambio de fecha por enfermedad",status:"E"},
    ];

  this.dataSource = new MatTableDataSource(this.motiveIncidence);
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
		this.dialogService.openConfirmDialog('¿Estas seguro de eliminar el Motivo de Incidencia '+id+' ?').afterClosed().subscribe(res=>{
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
