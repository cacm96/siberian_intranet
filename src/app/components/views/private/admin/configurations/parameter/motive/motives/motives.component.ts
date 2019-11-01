import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { DialogService } from '../../../../../../../../core/services/dialog.service';
import { SnackBarService } from '../../../../../../../../core/services/snack-bar.service';

export interface Motive {
  id: string;
  name: string;
  description: string;
  status: string;
  
}

@Component({
  selector: 'sib-motives',
  templateUrl: './motives.component.html',
  styleUrls: ['./motives.component.scss']
})
export class MotivesComponent implements OnInit {

  public motive:any[];
	displayedColumns: string[] = ['id','name','description','status','edit','delete'];
  dataSource: MatTableDataSource<Motive>;
  
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;


  constructor(
    private dialogService: DialogService,
    private snackBar: SnackBarService
  ) 
  {
    this.motive = [
      {id:"1",name:"Marca",description:"La marca que posee el equipo",status:"A"},
      {id:"2",name:"Modelo",description:"El Modelo que posee el equipo",status:"A"},
      {id:"3",name:"Año",description:"Año del equipo",status:"A"},
    ];
      this.dataSource = new MatTableDataSource(this.motive);
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
		this.dialogService.openConfirmDialog('¿Estás seguro de eliminar el Motivo'+id+' ?').afterClosed().subscribe(res=>{
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


