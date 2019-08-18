import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource} from '@angular/material/table';
import { DialogService } from '../../../../../../../../core/services/dialog.service';
import { SnackBarService } from '../../../../../../../../core/services/snack-bar.service';

export interface SkillWorkerData {
  id: string;
  skill_id: string;
  user_id: string;
  experience_years: string;
  created_at: string;
  update_at: string;
  status: string;

}

@Component({
  selector: 'sib-skill-workers',
  templateUrl: './skill-workers.component.html',
  styleUrls: ['./skill-workers.component.scss']
})
export class SkillWorkersComponent implements OnInit {

	public SkillWorker:any[];
	displayedColumns: string[] = ['id', 'skill_id', 'user_id','experience_years','created_at','updated_at','status','edit','delete'];
	dataSource: MatTableDataSource<SkillWorkerData>;

	@ViewChild(MatPaginator) paginator: MatPaginator;
	@ViewChild(MatSort) sort: MatSort;

  constructor
  (
	  	private dialogService: DialogService,
		private snackBar: SnackBarService
  ) 
  {
  		this.SkillWorker = [
	      {id:"1",skill_id:"01",user_id:"usuario 1 ",experience_years:"2 ",created_at:"12/08/19 ",updated_at:"12/08/19 ",status:"A"},
	      {id:"2",skill_id:"02",user_id:"usuario 2 ",experience_years:"3 ",created_at:"12/08/19 ",updated_at:"12/08/19 ",status:"E"}, 
	    ];

		this.dataSource = new MatTableDataSource(this.SkillWorker);
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
		this.dialogService.openConfirmDialog('¿Estas seguro de eliminar Habilidad '+id+' ?').afterClosed().subscribe(res=>{
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

