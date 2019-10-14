import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'sib-function-create',
  templateUrl: './function-create.component.html',
  styleUrls: ['./function-create.component.scss']
})
export class FunctionCreateComponent implements OnInit {

  constructor(
    private _location: Location,
  ) { }

  ngOnInit() {
  }
  goBack(){
    this._location.back();
  }

}
