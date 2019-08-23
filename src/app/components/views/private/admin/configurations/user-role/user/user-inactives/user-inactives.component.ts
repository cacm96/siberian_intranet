import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { DialogService } from '../../../../../../../../core/services/dialog.service';
import { SnackBarService } from '../../../../../../../../core/services/snack-bar.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import {Location} from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { Global } from '../../../../../../../../core/services/global';
import { User } from '../../../../../../../../models/user';
import { UserService } from '../../../../../../../../core/services/admin/user.service';

@Component({
  selector: 'sib-user-inactives',
  templateUrl: './user-inactives.component.html',
  styleUrls: ['./user-inactives.component.scss']
})
export class UserInactivesComponent implements OnInit {

	public user:any;
	public updateUser:any;
	public users: Array < User > = new Array < User > ();
	public message:string;
	public failedConect:string;

	displayedColumns: string[] = ['id', 'email','firstName','lastName','dniType','dni','gender','role','status','edit','delete'];
	dataSource: MatTableDataSource<User>;

	@ViewChild(MatPaginator) paginator: MatPaginator;
	@ViewChild(MatSort) sort: MatSort;
	constructor
	(
		private _userService: UserService,
		private dialogService: DialogService,
		private snackBar: SnackBarService,
		private _route: ActivatedRoute,
		private _router: Router,
		private _location: Location
	)
	{
		
	}

	ngOnInit()
	{
		this.getUsers();
	}

	getUsers()
	{
		this._userService.getInactives().subscribe
		(
			response =>
			{
				this.users = response.users;
				this.table();
			},
			error =>
			{
				console.log(<any>error);
				if(error instanceof HttpErrorResponse)
				{
					if(error.status===0)
					{
						this.failedConect = Global.failed;
					}
				}
			}
			)
	}

	applyFilter(filterValue: string)
	{
		this.dataSource.filter = filterValue.trim().toLowerCase();

		if (this.dataSource.paginator) {
			this.dataSource.paginator.firstPage();
		}
	}

	table()
	{
		this.dataSource = new MatTableDataSource(this.users);
		this.dataSource.paginator = this.paginator;
		this.dataSource.sort = this.sort;
	}

	onDelete(id){
		this.dialogService.openConfirmDialog('¿Estás seguro de eliminar el Usuario?').afterClosed().subscribe
		(
			response =>
			{
				if (response==true)
				{
					this.deleteUser(id);
				}else
				{
					console.log(response);
				}
			}
		);
	}

	deleteUser(id)
	{
		this._userService.deleteUser(id).subscribe
		(
			response =>
			{
				console.log(response);
	            this.message = response.message.text;
	            this.snackBar.openSnackBarSuccess(this.message);
	            this.getUsers();
			},
			error =>
			{
				console.log(<any>error);
			}
		)
	}

}
