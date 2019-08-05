import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../../../core/services/auth.service';
import { Router } from '@angular/router';
import {NgForm} from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public email:string;
  public password:string;
  public rol:string="client";

  constructor
  (
    private _authService: AuthService,
    private _router: Router,
  )
  {
  }

  ngOnInit() {
  }
  
  login(form: NgForm)
  {
    this.rol = form.form.value.rol;
    localStorage.setItem('roleID', this.rol);
    this._router.navigate(['/loginWeit']);
  }


}
