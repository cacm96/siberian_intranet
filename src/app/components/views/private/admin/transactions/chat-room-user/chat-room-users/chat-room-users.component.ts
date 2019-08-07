import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { DialogService } from '../../../../../../../core/services/dialog.service';
import { SnackBarService } from '../../../../../../../core/services/snack-bar.service';

export interface ChatRoomUserData {
  id: string;
  userId: string;
  chatRoomId: string;
}

@Component({
  selector: 'sib-chat-room-users',
  templateUrl: './chat-room-users.component.html',
  styleUrls: ['./chat-room-users.component.scss']
})
export class ChatRoomUsersComponent implements OnInit {

  public chatRoomUser:any[];
	displayedColumns: string[] = ['id', 'userId','chatRoomId','edit','delete'];
  dataSource: MatTableDataSource<ChatRoomUserData>;
  
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private dialogService: DialogService,
    private snackBar: SnackBarService
  )
  
  {
    this.chatRoomUser = [
      {id:"1", userId:"andre@gmail.com",chatRoomId:"Chat 1"},
      {id:"2", userId:"rey@gmail.com",chatRoomId:"Chat 2"},
      {id:"3", userId:"yasm@gmail.com",chatRoomId:"Chat 3"},
    ];
      this.dataSource = new MatTableDataSource(this.chatRoomUser);
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
		this.dialogService.openConfirmDialog('¿Estás seguro de eliminar el Chat Salón Usuario'+id+' ?').afterClosed().subscribe(res=>{
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
