import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { DialogService } from '../../../../../../../../core/services/dialog.service';
import { SnackBarService } from '../../../../../../../../core/services/snack-bar.service';

export interface LocationData {
  id: string;
  user_id: string;
  address: string;
  city: string;
  postal_code: string;
  is_living_place: string;
  created_at: string;
  updated_at: string;
  status: string;
}

@Component({
  selector: 'sib-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.scss']
})
export class LocationsComponent implements OnInit {

	public location:any[];
	displayedColumns: string[] = ['id', 'user_id', 'address', 'city', 'postal_code','is_living_place','created_at','updated_at','status','edit','delete'];
	dataSource: MatTableDataSource<LocationData>;

	@ViewChild(MatPaginator) paginator: MatPaginator;
	@ViewChild(MatSort) sort: MatSort;

  constructor
  (
	  	private dialogService: DialogService,
		private snackBar: SnackBarService
  ) 
  {
  		this.location = [
	      {id:"1",user_id:"usuario 1",address:"Barquisimeto",city:"Barquisimeto",postal_code:"3001",is_living_place:" lugar1",created_at:"12/08/19",updated_at:"12/08/19",status:"A"},
	      {id:"2",user_id:"usuario 2",address:"Guanare",city:"Barquisimeto",postal_code:"3001",is_living_place:"lugar2",created_at:"12/08/19",updated_at:"12/08/19",status:"E"},
	    ];

		this.dataSource = new MatTableDataSource(this.location);
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
		this.dialogService.openConfirmDialog('¿Estas seguro de eliminar Localización '+id+' ?').afterClosed().subscribe(res=>{
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
