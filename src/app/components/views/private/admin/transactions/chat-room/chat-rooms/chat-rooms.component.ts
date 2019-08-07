import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { DialogService } from '../../../../../../../core/services/dialog.service';
import { SnackBarService } from '../../../../../../../core/services/snack-bar.service';

export interface ChatRoomData {
  id: string;
  name: string;
  status: string;
  iconurl: string;
}
@Component({
  selector: 'sib-chat-rooms',
  templateUrl: './chat-rooms.component.html',
  styleUrls: ['./chat-rooms.component.scss']
})
export class ChatRoomsComponent implements OnInit {

  public chatRoom:any[];
	displayedColumns: string[] = ['id', 'name','status','iconurl','edit','delete'];
  dataSource: MatTableDataSource<ChatRoomData>;
  
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor(
    private dialogService: DialogService,
    private snackBar: SnackBarService
  ) 
  
  {
    this.chatRoom = [
      {id:"1",name:"Chat 1",status:"A",iconurl:"url1"},
      {id:"2",name:"Chat 2",status:"A",iconurl:"url2"},
      {id:"3",name:"Chat 3",status:"E",iconurl:"url3"},
    ];
      this.dataSource = new MatTableDataSource(this.chatRoom);
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
		this.dialogService.openConfirmDialog('¿Estás seguro de eliminar el Chat Salón'+id+' ?').afterClosed().subscribe(res=>{
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


