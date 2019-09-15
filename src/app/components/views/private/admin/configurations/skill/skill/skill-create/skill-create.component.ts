import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'sib-skill-create',
  templateUrl: './skill-create.component.html',
  styleUrls: ['./skill-create.component.scss']
})
export class SkillCreateComponent implements OnInit {

  constructor(
    private _location: Location,
  ) { }

  ngOnInit() {
  }

  goBack(){
    this._location.back();
  }
}
