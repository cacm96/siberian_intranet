import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { DialogService } from '../../../../../../../core/services/dialog.service';
import { SnackBarService } from '../../../../../../../core/services/snack-bar.service';

export interface PhoneData {
  id: string;
  number: string;
  user_id: string;
  phone_type: string;
  created_at: string;
  update_at: string;
  status: string;

}

@Component({
  selector: 'sib-phones',
  templateUrl: './Phones.component.html',
  styleUrls: ['./Phones.component.scss']
})
export class PhonesComponent implements OnInit {

	public Phone:any[];
	displayedColumns: string[] = ['id', 'number', 'user_id','phone_type','created_at','updated_at','status','edit','delete'];
	dataSource: MatTableDataSource<PhoneData>;

	@ViewChild(MatPaginator) paginator: MatPaginator;
	@ViewChild(MatSort) sort: MatSort;

  constructor
  (
	  	private dialogService: DialogService,
		private snackBar: SnackBarService
  ) 
  {
  		this.Phone = [
	      {id:"1",number:"04120987654",user_id:"usuario1 ",phone_type:"tipo 1 ",created_at:"12/08/19 ",updated_at:"12/08/19 ",status:"A"},
	      {id:"2",number:"04265678907",user_id:"usuario2 ",phone_type:"tipo 2 ",created_at:"12/08/19 ",updated_at:"12/08/19 ",status:"E"}, 
	    ];

		this.dataSource = new MatTableDataSource(this.Phone);
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
		this.dialogService.openConfirmDialog('¿Estas seguro de eliminar el Teléfono '+id+' ?').afterClosed().subscribe(res=>{
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

