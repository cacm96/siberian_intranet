import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common'; 

@Component({
  selector: 'sib-role-function-create',
  templateUrl: './role-function-create.component.html',
  styleUrls: ['./role-function-create.component.scss']
})
export class RoleFunctionCreateComponent implements OnInit {

  constructor(
    private _location: Location,
  ) { }

  ngOnInit() {
  }
  goBack(){
    this._location.back();
  }

}
