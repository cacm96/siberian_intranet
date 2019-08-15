import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { DialogService } from '../../../../../../../../core/services/dialog.service';
import { SnackBarService } from '../../../../../../../../core/services/snack-bar.service';

export interface UserData {
  id: string;
  email: string;
  password: string;
  role: string;
  first_name: string;
  last_name: string;
  dni_type: string;
  dni: string;
  gender: string;
  date_of_birth: string;
  image_url: string;
  status: string;
  note: string;
}

@Component({
  selector: 'sib-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})

export class UsersComponent implements OnInit {

  	public user:any[];
	displayedColumns: string[] = ['id', 'email','password', 'role','first_name','last_name','dni_type','dni','gender','date_of_birth','image_url','status','note','edit','delete'];
	dataSource: MatTableDataSource<UserData>;

	@ViewChild(MatPaginator) paginator: MatPaginator;
	@ViewChild(MatSort) sort: MatSort;


	constructor
	(
		private dialogService: DialogService,
		private snackBar: SnackBarService
	)
	{
		this.user = [
	      {id:"1",email:"mramos@gmail.com",password:"12345",role:"Cliente",first_name:"María",last_name:"Ramos",dni_type:"Cédula",dni:"24.535.109",gender:"Femenino",date_of_birth:"01/01/1994",image_url:"Imagen_1",status:"A",note:"Buen Cliente"},
	      {id:"2",email:"g_jesus@gmail.com",password:"123",role:"Prestador",first_name:"Jesús",last_name:"Gómez",dni_type:"Pasaporte",dni:"22.435.101",gender:"Masculino",date_of_birth:"08/08/1990",image_url:"Imagen_2",status:"E",note:"Buen Prestador"},
	      {id:"3",email:"anderson@gmail.com",password:"12345",role:"Administrador",first_name:"Anderson",last_name:"Rodriguez",dni_type:"RIF",dni:"4.237.100",gender:"Masculino",date_of_birth:"11/05/1956",image_url:"Imagen_3",status:"A",note:"Buen Administrador"},
	    ];

		this.dataSource = new MatTableDataSource(this.user);
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
		this.dialogService.openConfirmDialog('¿Estás seguro de eliminar el Usuario '+id+' ?').afterClosed().subscribe(res=>{
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