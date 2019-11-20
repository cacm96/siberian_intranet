import { Component, OnInit, ViewChild } from '@angular/core';
import {NgForm} from '@angular/forms';
import { DialogService } from 'src/app/core/services/dialog.service';
import { SnackBarService } from 'src/app/core/services/snack-bar.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import {Location} from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { Global } from 'src/app/core/services/global';
import { Revision } from 'src/app/models/revision';
import { RevisionService } from 'src/app/core/services/client/revision.service';
import { ServiceDetailService } from 'src/app/core/services/admin/serviceDetail.service';


@Component({
  selector: 'sib-buget-detail',
  templateUrl: './buget-detail.component.html',
  styleUrls: ['./buget-detail.component.scss']
})
export class BugetDetailComponent implements OnInit
{

  public revision: any;
  public revisionId:any;
  public serviceDetails:any;
  public message: string;
  public failedConect: string;

  constructor(
    private dialogService: DialogService,
    private snackBar: SnackBarService,
    private _revisionService: RevisionService,
    public _serviceDetailService: ServiceDetailService,
    private _route: ActivatedRoute,
    private _location: Location
    ) {

  }

  ngOnInit()
  {
    this._route.params.subscribe
    (
      params =>
      {
        let id = params.id;
        this.revisionId = id;
        this.getRevision(id);
      }
      );
    this.getServiceDetails();
  }

  getServiceDetails()
  {
    this._serviceDetailService.All().subscribe
    (
      response =>
      {
        this.serviceDetails = response.serviceDetails;
        console.log(this.serviceDetails);

      },
      error =>
      {
        console.log(<any>error);
        if(error instanceof HttpErrorResponse)
        {
          if(error.status===0)
          {
            this.failedConect = Global.failed;
          }
        }
      }
      )
  }
  changeServiceDetails(event)
  {
    console.log(event);

  }

  getRevision(id) {
    this._revisionService.getOne(id).subscribe
    (
      response =>
      {
        this.revision = response.revision;
        console.log(this.revision);
      },
      error =>
      {
        console.log(<any>error);
        if(error instanceof HttpErrorResponse)
        {
          if(error.status===0)
          {
            this.failedConect = Global.failed;
          }
        }
      });
  }

  onRegisterBudget(form: NgForm)
  {
    if(form.valid)
    {
      this._revisionService.diagnose(this.revisionId,form.value.note).subscribe
      (
        response =>
        {
          if(response.status==true)
          {
            this.message  = response.message.text;
            this.snackBar.openSnackBar(this.message,'');
            this.getRevision(this.revisionId);
          }
          else
          {
            this.message  = response.message.text;
            this.snackBar.openSnackBar(this.message,'');
            this.getRevision(this.revisionId);
          }
        },
        error =>
        {
          console.log(error);
          this.message  = error.error.message;
          this.snackBar.openSnackBar(this.message,'');
        }
        );
    }else
    {
    }

  }

  goBack()
  {
    this._location.back();
  }

}
