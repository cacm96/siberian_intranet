import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'sib-skill-show',
  templateUrl: './skill-show.component.html',
  styleUrls: ['./skill-show.component.scss']
})
export class SkillShowComponent implements OnInit {

  constructor(
    private _location: Location,
  ) { }

  ngOnInit() {
  }
  goBack(){
    this._location.back();
  }

}
