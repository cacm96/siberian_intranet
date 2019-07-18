import { Injectable } from '@angular/core';
import { SnackBarDeleteComponent } from '../../components/shared/snack-bar-delete/snack-bar-delete.component';
import { MatSnackBar } from '@angular/material/snack-bar';
@Injectable({
  providedIn: 'root'
})
export class SnackBarService {

  constructor(public snackBar: MatSnackBar) { }

  openSnackBar(message,action){
  	return this.snackBar.open(message, action,{
  		duration: 4000,
  	});
  }

}
