import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { DialogService } from '../../../../../../../../core/services/dialog.service';
import { SnackBarService } from '../../../../../../../../core/services/snack-bar.service';


export interface ResourceData {
  id: string;
  type_id: string;
  category_id: string;
  name: string;
  description: string;
  price: number;
  status: string;
}
@Component({
  selector: 'sib-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.scss']
})
export class ResourcesComponent implements OnInit {
  public resource:any[];
	displayedColumns: string[] = ['id', 'type_id', 'category_id','name', 'description','price','status','edit','delete'];
	dataSource: MatTableDataSource<ResourceData>;

	@ViewChild(MatPaginator) paginator: MatPaginator;
	@ViewChild(MatSort) sort: MatSort;
  constructor(
    private dialogService: DialogService,
		private snackBar: SnackBarService
  ) 
  {
    this.resource = [
      {id:"1",type_id: "type 1", category_id: "category 1", name:"name 1",description:"Description 1",price:"price 1", status:"A"},
      {id:"2",type_id: "type 2", category_id: "category 2", name:"name 2",description:"Description 2",price:"price 2", status:"A"},
      {id:"3",type_id: "type 3", category_id: "category 3", name:"name 3",description:"Description 3",price:"price 3", status:"A"}
    ];

  this.dataSource = new MatTableDataSource(this.resource);
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
		this.dialogService.openConfirmDialog('¿Estás seguro de eliminar el recurso'+id+' ?').afterClosed().subscribe(res=>{
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

