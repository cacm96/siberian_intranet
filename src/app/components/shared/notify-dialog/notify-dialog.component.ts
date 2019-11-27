import { Component, OnInit, Inject} from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { NotificationService } from '../../../../app/core/services/admin/notification.service';
import { HttpErrorResponse } from "@angular/common/http";
import { SnackBarService } from "../../../core/services/snack-bar.service";
import { Router, ActivatedRoute, Params } from "@angular/router";
import { Global } from "../../../core/services/global";
import {NgForm} from '@angular/forms';

@Component({
  selector: 'sib-notify-dialog',
  templateUrl: './notify-dialog.component.html',
  styleUrls: ['./notify-dialog.component.scss']
})
export class NotifyDialogComponent implements OnInit {

    public notification:any;
    //public notiticationDetails:any;
    public message:string;
    public failedConect:string;
    public userid: string;

  constructor
  (
  	@Inject(MAT_DIALOG_DATA) public data,
    public dialogRef: MatDialogRef<NotifyDialogComponent>,
    private _notificationService: NotificationService,
    private _route: ActivatedRoute,
    private _router: Router,
    //private _location: Location,
    private snackBar: SnackBarService,
  ) { 
    
  }
  ngOnInit() {
    
  }

 

closeDialog(){
		this.dialogRef.close();
	}

	save(form: NgForm) {
	this.dialogRef.close(this.data);
	}


}

