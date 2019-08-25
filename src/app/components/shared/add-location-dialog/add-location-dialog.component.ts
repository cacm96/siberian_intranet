import { Component, OnInit, Inject} from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'sib-add-location-dialog',
  templateUrl: './add-location-dialog.component.html',
  styleUrls: ['./add-location-dialog.component.scss']
})
export class AddLocationDialogComponent implements OnInit {

  public address:string;
  public state:string;
  public city:string;
  public postalCode:string;
  public userId:string=localStorage.getItem('resID');

  constructor
  (
    @Inject(MAT_DIALOG_DATA) public data,
  	public dialogRef: MatDialogRef<AddLocationDialogComponent>
  )
  {

  }


  ngOnInit()
  {
  }

  closeDialog(){
  	this.dialogRef.close();
  }

  save(form: NgForm) {
      this.dialogRef.close(form.value);
    }

  

}
