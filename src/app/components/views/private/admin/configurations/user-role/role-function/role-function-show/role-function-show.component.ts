import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'sib-role-function-show',
  templateUrl: './role-function-show.component.html',
  styleUrls: ['./role-function-show.component.scss']
})
export class RoleFunctionShowComponent implements OnInit {

  constructor(
    private _location: Location,
  ) { }

  ngOnInit() {
  }

  goBack(){
    this._location.back();
  }

}
