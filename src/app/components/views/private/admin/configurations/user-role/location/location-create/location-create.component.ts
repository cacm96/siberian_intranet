import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'sib-location-create',
  templateUrl: './location-create.component.html',
  styleUrls: ['./location-create.component.scss']
})
export class LocationCreateComponent implements OnInit {

  constructor(
    private _location: Location,
  ) { }

  ngOnInit() {
  }

  goBack(){
    this._location.back();
  }
}
