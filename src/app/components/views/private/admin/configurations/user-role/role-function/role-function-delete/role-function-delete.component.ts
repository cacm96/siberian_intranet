import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'sib-role-function-delete',
  templateUrl: './role-function-delete.component.html',
  styleUrls: ['./role-function-delete.component.scss']
})
export class RoleFunctionDeleteComponent implements OnInit {

  constructor(
    private _location: Location,
  ) { }

  ngOnInit() {
  }

  goBack(){
    this._location.back();
  }
}
