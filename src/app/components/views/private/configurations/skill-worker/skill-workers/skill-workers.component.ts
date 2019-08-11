import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { DialogService } from '../../../../../../core/services/dialog.service';
import { SnackBarService } from '../../../../../../core/services/snack-bar.service';

export interface SkillWorkerData {
  id: string;
  name: string;
  description: string;
  status: string;
}

@Component({
  selector: 'sib-skill-workers',
  templateUrl: './skill-workers.component.html',
  styleUrls: ['./skill-workers.component.scss']
})
export class SkillWorkersComponent implements OnInit {

 public skillWorker:any[];
	displayedColumns: string[] = ['id', 'name', 'description','status','edit','delete'];
	dataSource: MatTableDataSource<SkillWorkerData>;

	@ViewChild(MatPaginator) paginator: MatPaginator;
	@ViewChild(MatSort) sort: MatSort;

  constructor
  (
	  	private dialogService: DialogService,
		private snackBar: SnackBarService
  ) 
  {
  		this.skillWorker = [
	      {id:"1",name:"Electricista",description:"Pedro",status:"A"},
	      {id:"2",name:"Informatico",description:"Carlos",status:"E"},
	    ];

		this.dataSource = new MatTableDataSource(this.skillWorker);
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
		this.dialogService.openConfirmDialog('¿Estas seguro de eliminar Habilidad de Empleado '+id+' ?').afterClosed().subscribe(res=>{
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
