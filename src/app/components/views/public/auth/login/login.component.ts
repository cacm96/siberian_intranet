import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../../../core/services/public/auth.service';
import { Router } from '@angular/router';
import {NgForm} from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { SnackBarService } from '../../../../../core/services/snack-bar.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public email:string;
  public password:string;
  public message:string;
  public rol:string="client";
  constructor
  (
    private _authService: AuthService,
    private _router: Router,
    private snackBar: SnackBarService
  )
  {
  }

  ngOnInit() {
  }
  
/*  login(form: NgForm)
  {
    this.rol = form.form.value.rol;
    localStorage.setItem('roleID', this.rol);
    this._router.navigate(['/loginWeit']);
  }*/

  login(form: NgForm)
  {
    if(form.valid)
    {
      this._authService.login(this.email,this.password).subscribe
      (
        response =>
        {
          this.message = response.message.text;
          console.log(this.message);

          //this.resID = res.user[0]._id;
          this.messageSnackBar(this.message);
          //this.loginRedirect(res);
        },
        error =>
        {
          if(error instanceof HttpErrorResponse)
          {
            if(error.status===404)
            {
              //this.messageError = error.error.message;
              console.log(error);
              //this.onIsError();
            }
          }else
          {
            //this.messageError = error.message;
            console.log(error);
            //this.onIsError();
          }
        }
      );
    }else
    {

    }
  }

  messageSnackBar(message){
    this.snackBar.openSnackBarSuccess(message);
  }

}
