import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { DialogService } from '../../../../../../../core/services/dialog.service';
import { SnackBarService } from '../../../../../../../core/services/snack-bar.service';

export interface CompanyData {
  id: string;
  name: string;
  description: string;
  vision: string;
  mision: string;
  objetives: string;

}

@Component({
  selector: 'sib-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.scss']
})
export class CompaniesComponent implements OnInit {

  public company:any[];
	displayedColumns: string[] = ['id', 'name', 'description','vision','mision','objetives','edit','delete'];
	dataSource: MatTableDataSource<CompanyData>;

	@ViewChild(MatPaginator) paginator: MatPaginator;
	@ViewChild(MatSort) sort: MatSort;

  constructor(
    private dialogService: DialogService,
    private snackBar: SnackBarService
    )
     { 
      this.company = [
        {id:"1",name:"Se hace de todo",description:"Reparación y mantenimiento a domicilio ",vision:"visión",mision:"misión",objetives:"objetivos"},
      ];
  
    this.dataSource = new MatTableDataSource(this.company);
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
		this.dialogService.openConfirmDialog('¿Estás seguro de eliminar la Empresa'+id+' ?').afterClosed().subscribe(res=>{
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

