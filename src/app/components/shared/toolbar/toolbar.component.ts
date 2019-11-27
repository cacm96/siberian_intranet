import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';
import { AuthService } from '../../../core/services/public/auth.service';
import { DialogService } from '../../../core/services/dialog.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { NotificationService } from '../../../../app/core/services/admin/notification.service';
import { UserService } from '../../../../app/core/services/admin/user.service';
import { HttpErrorResponse } from "@angular/common/http";
import { SnackBarService } from "../../../core/services/snack-bar.service";
import { Router, ActivatedRoute, Params } from "@angular/router";
import { Global } from "../../../core/services/global";
import { User } from '../../../models/user';

@Component({
  selector: 'sib-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
	public failedConect:string;

	public userid:string;
	 //public user:User;
	 
	@Output() trigger = new EventEmitter<void>();
	@Input() isToggle:boolean;
	
	constructor(
		private _authService: AuthService,
		private dialogService: DialogService,
		private _userService: UserService,
		private _notificationService: NotificationService,
		public dialog: MatDialog
	)
	{

	}
	ngOnInit() {
		this.userid=localStorage.getItem('resID');
		//this.getUserNotifications(this.userid)
	}


	/*getUser(id)
  {
    this._userService.getOne(id).subscribe
    (
      response =>
      {
        this.user = response.user;
      },
      error =>
      {
        console.log(<any>error);
      }
    );
  }*/

	notification(): void {
	  let res = null;

	  this._notificationService.getUserNotifications(this.userid).subscribe(response => {
	    this.notification = response.notifications;
	    res = this.dialogService.openNotifyDialog(this.notification);
	    console.log(this.notification)
	    console.log(response) 
	    res.afterClosed().subscribe(result => {
	      console.log(result);
	    });
	  });
	}
	



	shood(){
		this.trigger.emit();
	}

	
	
}
