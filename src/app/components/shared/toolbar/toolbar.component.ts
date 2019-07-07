import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'sib-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

	@Output() trigger = new EventEmitter<void>();
	constructor() { }

	ngOnInit() {
	}

	shood(){
		this.trigger.emit();
	}

}
