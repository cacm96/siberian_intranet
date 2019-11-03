import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { DialogService } from '../../../../../../../core/services/dialog.service';
import { SnackBarService } from '../../../../../../../core/services/snack-bar.service';

export interface CompanyData {
  id: string;
  rif: string;
  name: string;
  mision: string;
  vision: string;
  aboutUs: string;
  address: string;
  phoneOne: string;
  phoneTwo: string;
  imageUrl: string;
  facebook: string;
  instagram: string;
  twitter: string;
}

@Component({
  selector: 'sib-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.scss']
})
export class CompaniesComponent implements OnInit {

  public company:any[];
  displayedColumns: string[] = ['id','rif','name','mision','vision','aboutUs','address','phoneOne','phoneTwo','edit'];
  dataSource: MatTableDataSource<CompanyData>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private dialogService: DialogService,
    private snackBar: SnackBarService
    )
     { 
      this.company = [
        {id:"1",rif:"j-012285524",name:"Se hace de todo",mision:"misión",vision:"visión",aboutUs:"¿Quiénes somos?",address:"carrera 20 con calle 20",phoneOne:"0251 1112233",phoneTwo:"0251 4445566"},
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

