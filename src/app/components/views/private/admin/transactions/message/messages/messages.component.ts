import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { DialogService } from '../../../../../../../core/services/dialog.service';
import { SnackBarService } from '../../../../../../../core/services/snack-bar.service';

export interface MessageData {
  id: string;
  chatRoomId: string;
  userId: string;
  body: string;
  
}

@Component({
  selector: 'sib-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit {

  public message:any[];
	displayedColumns: string[] = ['id','chatRoomId','userId', 'body','edit','delete'];
  dataSource: MatTableDataSource<MessageData>;
  
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private dialogService: DialogService,
    private snackBar: SnackBarService
  )
  
  {
    this.message = [
      {id:"1",chatRoomId:"Chat 1" ,userId:"andre@gmail.com",body:"Mensaje 1"},
      {id:"2", chatRoomId:"Chat 2",userId:"rey@gmail.com",body:"Mensaje 2"},
      {id:"3", chatRoomId:"Chat 3",userId:"yasm@gmail.com",body:"Mensaje 3"},
    ];
      this.dataSource = new MatTableDataSource(this.message);
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
		this.dialogService.openConfirmDialog('¿Estás seguro de eliminar el Mensaje'+id+' ?').afterClosed().subscribe(res=>{
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

