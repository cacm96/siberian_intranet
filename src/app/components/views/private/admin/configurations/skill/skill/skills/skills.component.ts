import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { DialogService } from '../../../../../../../../core/services/dialog.service';
import { SnackBarService } from '../../../../../../../../core/services/snack-bar.service';


export interface SkillData {
  id: string;
  name: string;
  description: string;
  status: string;
}
@Component({
  selector: 'sib-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  public skill:any[];
	displayedColumns: string[] = ['id', 'name', 'description','status','edit','delete'];
	dataSource: MatTableDataSource<SkillData>;

	@ViewChild(MatPaginator) paginator: MatPaginator;
	@ViewChild(MatSort) sort: MatSort;
  constructor(
    private dialogService: DialogService,
		private snackBar: SnackBarService
  ) 
  {
    this.skill = [
      {id:"1",name:"name 1",description:"description 1",status:"A"},
      {id:"2",name:"name 2",description:"description 2",status:"A"},
      {id:"3",name:"name 3",description:"description 3",status:"E"}
    ];

  this.dataSource = new MatTableDataSource(this.skill);
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
		this.dialogService.openConfirmDialog('¿Estás seguro de eliminar la habilidad'+id+' ?').afterClosed().subscribe(res=>{
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

