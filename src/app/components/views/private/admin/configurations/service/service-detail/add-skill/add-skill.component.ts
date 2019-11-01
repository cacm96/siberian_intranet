import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { Global } from '../../../../../../../../core/services/global'
import { ServiceDetail } from '../../../../../../../../models/serviceDetail';
import { ServiceDetailService } from '../../../../../../../../core/services/admin/serviceDetail.service';
import { SkillService } from '../../../../../../../../core/services/admin/skill.service';
import { SnackBarService } from '../../../../../../../../core/services/snack-bar.service';


@Component({
  selector: 'sib-add-skill',
  templateUrl: './add-skill.component.html',
  styleUrls: ['./add-skill.component.scss']
})
export class AddSkillComponent implements OnInit {

  public skills: any;
  public auxSkills: any;
  public serviceDetail: ServiceDetail;
  public skillId: string;
  public serviceDetailId: string;
  public total: Number;
  public message: string;
  public failedConect: string;

  public seriviceDetailUpdate: any = {
    id: Number,
    skills: []
  };

  constructor
    (
      private _skillService: SkillService,
      private _serviceDetailService: ServiceDetailService,
      private _router: Router,
      private _route: ActivatedRoute,
      private _location: Location,
      private snackBar: SnackBarService
    ) {
  }

  ngOnInit() {
    this._route.params.subscribe
      (
        params => {
          let id = params.id;
          this.serviceDetailId = id;
          this.seriviceDetailUpdate.id = id;
          this.getServiceDetail(id);
        }
      );
    this.getskills();
    this.auxSkills = [];
  }

  getskills() {
    this._skillService.All().subscribe
      (
        response => {
          if (response.status == true) {
            this.skills = response.skills;
            this.skillId = "";
            console.log(this.skills);
          }
          else {
            this.total = 0;
            this.message = response.message.text;
            console.log(this.message);
          }

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

  getServiceDetail(id) {
    this._serviceDetailService.getOne(id).subscribe
      (
        response => {
          this.serviceDetail = response.serviceDetail;
          console.log(this.serviceDetail);
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


  register(form: NgForm)
	{
		if(form.valid)
		{
      if(this.serviceDetail.skills){
        for(let skill of this.serviceDetail.skills) {
          this.auxSkills.push(skill.id);
        }
      }
      this.auxSkills.push(this.skillId);
      this.seriviceDetailUpdate.skills = this.auxSkills;
      console.log(this.seriviceDetailUpdate.skills," habilidades");
      console.log(this.seriviceDetailUpdate," update");

			this._serviceDetailService.addSkill(this.seriviceDetailUpdate).subscribe
			(
				response =>
				{
					if (response.status==true)
					{
						this.getServiceDetail(this.serviceDetailId);
						this.message = response.message.text;
						this.messageSnackBar(this.message); 
						form.reset();
					}
					else
					{
						console.log(response);
						this.getServiceDetail(this.serviceDetailId);
						this.message = response.message.text;
						this.messageSnackBar(this.message);
          }
          //this.seriviceDetailUpdate.skills = [];
				},
				error =>
				{
					console.log(error);

					if(error instanceof HttpErrorResponse)
					{
						if(error.status===404)
						{
							this.message = error.error.message;
							console.log(error);
							this.messageSnackBar(this.message);
						}
					}else
					{
						//this.message = error.error.message;
						console.log(error);
						//this.messageSnackBar(this.message);
					}
				}
				);
		}else
		{
		}
	}

  onDelete(id) {

  }

  messageSnackBar(message) {
    this.snackBar.openSnackBarSuccess(message);
  }

  goBack() {
    this._location.back();
  }

}
