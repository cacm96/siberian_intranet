import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { Global } from '../../../../../../../../core/services/global'
import { Skill } from '../../../../../../../../models/skill';
import { SkillService } from '../../../../../../../../core/services/admin/skill.service';
import { SnackBarService } from '../../../../../../../../core/services/snack-bar.service';

@Component({
  selector: 'sib-skill-show',
  templateUrl: './skill-show.component.html',
  styleUrls: ['./skill-show.component.scss']
})
export class SkillShowComponent implements OnInit {

  public skill: Skill;
  public message: string;
  public failedConect: string;

  constructor
    (
      private _skillService: SkillService,
      private _route: ActivatedRoute,
      private _router: Router,
      private _location: Location,
      private snackBar: SnackBarService
    ) {
  }

  ngOnInit() {
    this._route.params.subscribe
      (
        params => {
          let id = params.id;
          this.getSkill(id);
        }
      );
  }

  getSkill(id) {
    this._skillService.getOne(id).subscribe
      (
        response => {
          this.skill = response.skill;
          console.log(this.skill);
        },
        error => {
          console.log(<any>error);
          if (error instanceof HttpErrorResponse) {
            if (error.status === 0) {
              this.failedConect = Global.failed;
            }
          }
        }
      )
  }
  goBack(){
    this._location.back();
  }

}
