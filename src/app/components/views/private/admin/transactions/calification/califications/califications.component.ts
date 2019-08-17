import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { DialogService } from '../../../../../../../core/services/dialog.service';
import { SnackBarService } from '../../../../../../../core/services/snack-bar.service';

export interface CalificationsData {
  id: string;
  author_id: string;
  service_detail_id: string;
  service_order_id: string;
  points: string;
  comment: string;
  created_at: string;
  updated_at: string;
  status: string;

}

@Component({
  selector: 'sib-califications',
  templateUrl: './califications.component.html',
  styleUrls: ['./califications.component.scss']
})

export class CalificationsComponent implements OnInit {

  public calification:any[];
  displayedColumns: string[] = ['id', 'author_id', 'service_detail_id','service_order_id','points','comment','created_at','updated_at','status','edit','delete'];
  dataSource: MatTableDataSource<CalificationsData>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor
  (
    private dialogService: DialogService,
    private snackBar: SnackBarService
  ) 
  { 
    this.calification = [
      {id:"1" ,author_id:"1",service_detail_id:"1",service_order_id:"1",points:"4",comment:"comentario 1    ", created_at:" 16/08/2019 ",updated_at:" 16/08/2019 ",status:"A"},
      {id:"2" ,author_id:"2",service_detail_id:"2",service_order_id:"2",points:"6",comment:"comentario 2    ", created_at:" 16/08/2019 ",updated_at:" 16/08/2019 ",status:"A",},
      {id:"3" ,author_id:"3",service_detail_id:"3",service_order_id:"3",points:"8",comment:"comentario 3    ", created_at:" 16/08/2019 ",updated_at:" 17/08/2019 ",status:"E"},
    ];

  this.dataSource = new MatTableDataSource(this.calification);
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
    this.dialogService.openConfirmDialog('¿Estás seguro de eliminar la calificación '+id+' ?').afterClosed().subscribe(res=>{
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


