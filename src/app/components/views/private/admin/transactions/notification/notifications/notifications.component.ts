import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { DialogService } from '../../../../../../../core/services/dialog.service';
import { SnackBarService } from '../../../../../../../core/services/snack-bar.service';

export interface NotificationsData {
  id: string;
  user_id: string;
  notify_type_id: string;
  calification_id: string;
  author_id: string;
  read_at: string;
  created_at: string;
  updated_at: string;
  status: string;
  
}

@Component({
  selector: 'sib-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss']
})

export class NotificationsComponent implements OnInit {

  public notification:any[];
  displayedColumns: string[] = ['id', 'user_id', 'notify_type_id','calification_id','author_id','read_at','created_at','updated_at','status','edit','delete'];
  dataSource: MatTableDataSource<NotificationsData>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor
  (
    private dialogService: DialogService,
    private snackBar: SnackBarService
  ) 
  { 
    this.notification = [
      {id:"1" ,user_id:"1",notify_type_id:"1",calification_id:"1",author_id:"4",read_at:"7", created_at:"15/08/2019",updated_at:"15/08/2019",status:"A"},
      {id:"2" ,user_id:"2",notify_type_id:"2",calification_id:"2",author_id:"4",read_at:"7", created_at:"15/08/2019",updated_at:"15/08/2019",status:"A",},
      {id:"3" ,user_id:"3",notify_type_id:"3",calification_id:"2",author_id:"4",read_at:"7", created_at:"15/08/2019",updated_at:"15/08/2019",status:"E"},
    ];

  this.dataSource = new MatTableDataSource(this.notification);
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
    this.dialogService.openConfirmDialog('¿Estás seguro de eliminar la notificación '+id+' ?').afterClosed().subscribe(res=>{
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


