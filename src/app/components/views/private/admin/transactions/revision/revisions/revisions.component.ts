import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { DialogService } from '../../../../../../../core/services/dialog.service';
import { SnackBarService } from '../../../../../../../core/services/snack-bar.service';

export interface RevisionsData {
  id: string;
  request_id: string;
  service_order_id: string;
  note: string;
  number_workers: string;
  number_days: string;
  status: string;
  
}

@Component({
  selector: 'sib-revisions',
  templateUrl: './revisions.component.html',
  styleUrls: ['./revisions.component.scss']
})
export class RevisionsComponent implements OnInit {

  public revision:any[];
	displayedColumns: string[] = ['id', 'request_id', 'service_order_id','note','number_workers',"number_days",'status','edit','delete'];
	dataSource: MatTableDataSource<RevisionsData>;

	@ViewChild(MatPaginator) paginator: MatPaginator;
	@ViewChild(MatSort) sort: MatSort;
  constructor
  (
    private dialogService: DialogService,
		private snackBar: SnackBarService
  ) 
  { 
    this.revision = [
      {id:"1" ,request_id:"123",service_order_id:"456",note:"No prende",number_workers:"   4  ",number_days:"7", status:"A"},
      {id:"2" ,request_id:"978",service_order_id:"886",note:"Filtraje en el techo",number_workers:"   4  ",number_days:"7",status:"A",},
      {id:"3" ,request_id:"234",service_order_id:"009",note:"No caliente",number_workers:"   4  ",number_days:"7",status:"E"},
    ];

  this.dataSource = new MatTableDataSource(this.revision);
  }

  ngOnInit()
  {
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
		this.dialogService.openConfirmDialog('¿Estás seguro de eliminar la revision '+id+' ?').afterClosed().subscribe(res=>{
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
