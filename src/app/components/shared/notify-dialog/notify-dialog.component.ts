import { Component, OnInit, Inject} from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { NotificationService } from '../../../../app/core/services/admin/notification.service';
import { HttpErrorResponse } from "@angular/common/http";
import { SnackBarService } from "../../../core/services/snack-bar.service";
import { Router, ActivatedRoute, Params } from "@angular/router";
import { Global } from "../../../core/services/global";
import {NgForm} from '@angular/forms';
import * as moment from 'moment';

@Component({
  selector: 'sib-notify-dialog',
  templateUrl: './notify-dialog.component.html',
  styleUrls: ['./notify-dialog.component.scss']
})
export class NotifyDialogComponent implements OnInit {

	date = [];
  constructor(@Inject(MAT_DIALOG_DATA) public data,
		public dialogRef: MatDialogRef<NotifyDialogComponent>) {}
		
  ngOnInit() {
    this.data.notification.forEach(_ => {
			let d = moment(new Date(_.createdAt).toISOString()).format('hh:mm - DD/MM/YYYY');
			this.date.push(d);
		})
  }
	c
	loseDialog(){
		this.dialogRef.close();
	}
}

