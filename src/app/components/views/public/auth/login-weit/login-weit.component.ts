import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../../../core/services/public/auth.service';
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
		localStorage.setItem('token','eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NSwiaWF0IjoxNTY1NzQyNDc1LCJleHAiOjE1NjYzNDcyNzV9.tE7TKaoE7pWra44FiY9nVM7m6ODLoQxTSdoUYraUS4o');
    	localStorage.setItem('resID', '1');
		var actualRoute = window.location.origin;
		if (this.rol=="client")	
			window.location.replace(actualRoute+'/auth/client/dashboard');
		else if (this.rol=="lender")
			window.location.replace(actualRoute+'/auth/lender/dashboard');
		else if (this.rol=="admin")
			window.location.replace(actualRoute+'/auth/admin/dashboard');
		else
			window.location.replace(actualRoute+'/auth');

	}

}

