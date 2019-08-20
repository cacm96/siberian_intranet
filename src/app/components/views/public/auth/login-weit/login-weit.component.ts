import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../../../core/services/public/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'sib-login-weit',
  templateUrl: './login-weit.component.html',
  styleUrls: ['./login-weit.component.scss']
})
export class LoginWeitComponent implements OnInit {

	public role:string;

	constructor(
		private _router: Router,
		public _authService: AuthService,
	){}


	ngOnInit()
	{
		this.role=this._authService.getRole();
		var actualRoute = window.location.origin;
		if (this.role=="client")	
			window.location.replace(actualRoute+'/auth/client/dashboard');
		else if (this.role=="lender")
			window.location.replace(actualRoute+'/auth/lender/dashboard');
		else if (this.role=="admin")
			window.location.replace(actualRoute+'/auth/admin/dashboard');
		else
			window.location.replace(actualRoute+'/auth');

	}

}

