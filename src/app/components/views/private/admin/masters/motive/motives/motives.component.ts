import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { DialogService } from '../../../../../../../core/services/dialog.service';
import { SnackBarService } from '../../../../../../../core/services/snack-bar.service';

export interface MotiveData {
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
	displayedColumns: string[] = ['id', 'name', 'description','status','edit','delete'];
  dataSource: MatTableDataSource<MotiveData>;
  
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private dialogService: DialogService,
    private snackBar: SnackBarService
    ) 

    {
      this.motive = [
        {id:"1",name:"Rechazada",description:"La dirección indicada esta fuera de la región de trabajo",status:"A"},
        {id:"2",name:"No viable",description:"No tiene reparación",status:"A"},

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
		this.dialogService.openConfirmDialog('¿Estás seguro de eliminar el motivo'+id+' ?').afterClosed().subscribe(res=>{
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
