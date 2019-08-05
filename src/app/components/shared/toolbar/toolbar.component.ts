import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'sib-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
	public rol:string;

	@Output() trigger = new EventEmitter<void>();
	@Input() isToggle:boolean;
	constructor(private _authService: AuthService,) { }

	ngOnInit() {
		this.rol=this._authService.getRoleID();
	}

	shood(){
		this.trigger.emit();
	}

}
