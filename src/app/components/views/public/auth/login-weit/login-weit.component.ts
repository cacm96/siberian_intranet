import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../../../core/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'sib-login-weit',
  templateUrl: './login-weit.component.html',
  styleUrls: ['./login-weit.component.scss']
})
export class LoginWeitComponent implements OnInit {

	public rol:string;
	public ruta:string;
	public loginWeit:boolean;


	constructor(
		private _router: Router,
		public _authService: AuthService,
	){}


	ngOnInit()
	{
		this.rol=this._authService.getRoleID();
		localStorage.setItem('token','eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE1NjEyOTA0ODMsImV4cCI6MTU2Mzg4MjQ4M30.BEJRPUpb21OvaZTH0VCNmyhKBmzAQ5xAwFU35EA7Ghg');
    	localStorage.setItem('resID', '1');
		var actualRoute = window.location.origin;
		if (this.rol=="client")	
			window.location.replace(actualRoute+'/auth/dashboard/client');
		else if (this.rol=="lender")
			window.location.replace(actualRoute+'/auth/dashboard/lender');
		else if (this.rol=="admin")
			window.location.replace(actualRoute+'/auth/dashboard/admin');
		else
			window.location.replace(actualRoute+'/auth/dashboard');

	}

}

