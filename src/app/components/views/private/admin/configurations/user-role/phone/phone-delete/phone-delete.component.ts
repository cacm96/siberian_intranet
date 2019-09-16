import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'sib-phone-delete',
  templateUrl: './phone-delete.component.html',
  styleUrls: ['./phone-delete.component.scss']
})
export class PhoneDeleteComponent implements OnInit {

  constructor(
    private _location: Location,
  ) { }

  ngOnInit() {
  }

  goBack(){
    this._location.back();
  }
}
