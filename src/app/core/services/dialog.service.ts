import { Injectable } from '@angular/core';
import { ConfirmDialogComponent } from '../../components/shared/confirm-dialog/confirm-dialog.component';
import { AddLocationDialogComponent } from '../../components/shared/add-location-dialog/add-location-dialog.component';

import {MatDialog} from '@angular/material/dialog';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(public dialog: MatDialog) { }

  openConfirmDialog(msg){
  	return this.dialog.open(ConfirmDialogComponent,{
  		data:{
  			message:msg
  		}
  	});
  }

  openAddLocationDialog(){
  	return this.dialog.open(AddLocationDialogComponent,{
      width: '350px',
    });
  }
}
