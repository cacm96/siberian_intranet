import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'sib-function-show',
  templateUrl: './function-show.component.html',
  styleUrls: ['./function-show.component.scss']
})
export class FunctionShowComponent implements OnInit {

  constructor(
    private _location: Location,
  ) { }

  ngOnInit() {
  }

  goBack(){
    this._location.back();
  }

}
