import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { DialogService } from '../../../../../../../../core/services/dialog.service';
import { SnackBarService } from '../../../../../../../../core/services/snack-bar.service';

export interface CategoryData {
  id: string;
  name: string;
  description: string;
  status: string;
}
@Component({
  selector: 'sib-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  public category:any[];
	displayedColumns: string[] = ['id', 'name', 'description','status','edit','delete'];
  dataSource: MatTableDataSource<CategoryData>;
  
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  
  constructor(
    private dialogService: DialogService,
    private snackBar: SnackBarService
    ) 
    {
      this.category = [
        {id:"1",name:"Electrodoméstico",description:"Equipo electroméstico	",status:"A"},
        {id:"2",name:"Interiores",description:"Interiores de oficinas y hogares",status:"A"},
        {id:"3",name:"Exteriores",description:"Exteriores de oficinas y hogares",status:"E"},
      ];
        this.dataSource = new MatTableDataSource(this.category);
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
		this.dialogService.openConfirmDialog('¿Estás seguro de eliminar la Categoría'+id+' ?').afterClosed().subscribe(res=>{
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

