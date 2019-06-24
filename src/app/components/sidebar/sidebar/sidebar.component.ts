import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
	public rol:string;

	constructor
	(
		private _authService: AuthService,
	){ }

	ngOnInit()
	{
		this.rol=this._authService.getRoleID();
	}

}
