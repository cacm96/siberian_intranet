import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'sib-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

	@Output() trigger = new EventEmitter<void>();
	@Input() isToggle:boolean;
	constructor() { }

	ngOnInit() {
	}

	shood(){
		this.trigger.emit();
	}

}
