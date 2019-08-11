import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { DialogService } from '../../../../../../../core/services/dialog.service';
import { SnackBarService } from '../../../../../../../core/services/snack-bar.service';

export interface bitacoraTypeData {
  id: string;
  name: string;
  description: string;
  status: string;
}

@Component({
  selector: 'sib-bitacora-types',
  templateUrl: './bitacora-types.component.html',
  styleUrls: ['./bitacora-types.component.scss']
})

export class BitacoraTypesComponent implements OnInit {

  public bitacoraType:any[];
  displayedColumns: string[] = [ 
    'id',
    'name',
    'description',
    'status',
    'edit',
    'delete'];
  dataSource: MatTableDataSource<bitacoraTypeData>;
  
  @ViewChild(MatPaginator) paginator: MatPaginator;
	@ViewChild(MatSort) sort: MatSort;

  constructor(
    private dialogService: DialogService,
		private snackBar: SnackBarService
  ) { 
    this.bitacoraType = [
      {id:"1",name:"Bitacora 1",description:"Tipo de Bitacora 1",status:"A"},
      {id:"2",name:"Bitacora 2",description:"Tipo de Bitacora 2",status:"E"},
    ];

  this.dataSource = new MatTableDataSource(this.bitacoraType);
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
		this.dialogService.openConfirmDialog('¿Estas seguro de eliminar el Tipo de Bitacora '+id+' ?').afterClosed().subscribe(res=>{
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
