import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../core/services/public/auth.service';

@Component({
  selector: 'sib-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

	public role:string;

	constructor
	(
		private _authService: AuthService,
	){ }

	ngOnInit()
	{
		this.role=this._authService.getRole();
	}

}
