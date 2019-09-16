import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'sib-function-edit',
  templateUrl: './function-edit.component.html',
  styleUrls: ['./function-edit.component.scss']
})
export class FunctionEditComponent implements OnInit {

  constructor(
    private _location: Location,
  ) { }

  ngOnInit() {
  }

  goBack(){
    this._location.back();
  }
}
