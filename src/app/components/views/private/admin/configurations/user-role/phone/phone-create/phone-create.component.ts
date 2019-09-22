import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'sib-phone-create',
  templateUrl: './phone-create.component.html',
  styleUrls: ['./phone-create.component.scss']
})
export class PhoneCreateComponent implements OnInit {

  constructor(
    private _location: Location,
  ) { }

  ngOnInit() {
  }
  goBack(){
    this._location.back();
  }

}
