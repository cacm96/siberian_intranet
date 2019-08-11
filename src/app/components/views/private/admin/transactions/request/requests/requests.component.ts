import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { DialogService } from '../../../../../../../core/services/dialog.service';
import { SnackBarService } from '../../../../../../../core/services/snack-bar.service';

export interface RequestsData {
  id: string;
  user_id: string;
  catalog_variety_detail_id: string;
  description: string;
  location_id: string;
  price: string;
  status: string;
}

@Component({
  selector: 'sib-requests',
  templateUrl: './requests.component.html',
  styleUrls: ['./requests.component.scss']
})
export class RequestsComponent implements OnInit {
 
  public requests:any[];
  displayedColumns: string[] = ['id','user_id','catalog_variety_detail_id','description','location_id','price','status','edit','delete'];
  dataSource: MatTableDataSource<RequestsData>;
  
  @ViewChild(MatPaginator) paginator: MatPaginator;
	@ViewChild(MatSort) sort: MatSort;

  constructor(
    private dialogService: DialogService,
		private snackBar: SnackBarService
  ) 
  { 
    this.requests = [
      {id:"1",user_id:"123",catalog_variety_detail_id:"456",description:"No enfría",location_id:"1234",price:"2000",status:"A"},
      {id:"2",user_id:"345",catalog_variety_detail_id:"789",description:"No calienta",location_id:"5678",price:"5000",status:"E"},
      {id:"3",user_id:"678",catalog_variety_detail_id:"012",description:"No prende",location_id:"9012",price:"8000",status:"A"},
    ];

    this.dataSource = new MatTableDataSource(this.requests);
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
		this.dialogService.openConfirmDialog('¿Estás seguro de eliminar la solicitud'+id+' ?').afterClosed().subscribe(res=>{
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
   