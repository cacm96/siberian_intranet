import { Injectable } from '@angular/core';
import { ConfirmDialogComponent } from '../../components/shared/confirm-dialog/confirm-dialog.component';
import { AddLocationDialogComponent } from '../../components/shared/add-location-dialog/add-location-dialog.component';
import { EditLocationDialogComponent } from '../../components/shared/edit-location-dialog/edit-location-dialog.component';
import { AddPhoneDialogComponent } from '../../components/shared/add-phone-dialog/add-phone-dialog.component';
import { EditPhoneDialogComponent } from '../../components/shared/edit-phone-dialog/edit-phone-dialog.component';

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

  openEditLocationDialog(location){
    return this.dialog.open(EditLocationDialogComponent,{
      width: '350px',
      data:{
        location:location
      }
    });
  }

  openAddPhoneDialog(){
    return this.dialog.open(AddPhoneDialogComponent,{
      width: '350px',
    });
  }

  openEditPhoneDialog(phone){
    return this.dialog.open(EditPhoneDialogComponent,{
      width: '350px',
      data:{
        phone:phone
      }
    });
  }
}
