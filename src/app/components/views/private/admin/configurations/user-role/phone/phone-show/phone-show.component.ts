import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'sib-phone-show',
  templateUrl: './phone-show.component.html',
  styleUrls: ['./phone-show.component.scss']
})
export class PhoneShowComponent implements OnInit {

  constructor(
    private _location: Location,
  ) { }

  ngOnInit() {
  }

  goBack(){
    this._location.back();
  }

}
