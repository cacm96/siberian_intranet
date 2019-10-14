import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'sib-role-function-edit',
  templateUrl: './role-function-edit.component.html',
  styleUrls: ['./role-function-edit.component.scss']
})
export class RoleFunctionEditComponent implements OnInit {

  constructor(
    private _location: Location,
  ) { }

  ngOnInit() {
  }
  goBack(){
    this._location.back();
  }

}
