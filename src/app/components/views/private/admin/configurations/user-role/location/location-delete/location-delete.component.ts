import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'sib-location-delete',
  templateUrl: './location-delete.component.html',
  styleUrls: ['./location-delete.component.scss']
})
export class LocationDeleteComponent implements OnInit {

  constructor(
    private _location: Location,
  ) { }

  ngOnInit() {
  }
  goBack(){
    this._location.back();
  }

}
