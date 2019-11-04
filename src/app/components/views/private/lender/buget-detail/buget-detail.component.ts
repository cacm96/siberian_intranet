import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sib-buget-detail',
  templateUrl: './buget-detail.component.html',
  styleUrls: ['./buget-detail.component.scss']
})
export class BugetDetailComponent implements OnInit {

	public serviceDetails:any[];
	public serviceDetailsSelected:string="";

  constructor()
  {
		this.serviceDetails= [
			{id:"Reparación",name:"Reparación de motor"},
			{id:"Mantenimiento",name:"Mantenimiento de motor"},
		];
  }

  ngOnInit() {
  }

}
