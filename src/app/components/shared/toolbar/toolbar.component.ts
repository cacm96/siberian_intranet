import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';
import { AuthService } from '../../../core/services/public/auth.service';
import { DialogService } from '../../../core/services/dialog.service';

@Component({
  selector: 'sib-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
	public role:string;

	@Output() trigger = new EventEmitter<void>();
	@Input() isToggle:boolean;
	
	constructor(
		private _authService: AuthService,
    	private dialogService: DialogService,
	)
	{

	}

	ngOnInit() {
		this.role=this._authService.getRole();
	}

	shood(){
		this.trigger.emit();
	}
	notification(){
		this.dialogService.openConfirmDialog('¿Estás seguro de eliminar el Catálogo').afterClosed().subscribe();
	}

}
