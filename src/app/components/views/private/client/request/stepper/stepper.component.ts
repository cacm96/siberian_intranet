import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper'
import {MatDatepickerInputEvent} from '@angular/material/datepicker';

import { Router, ActivatedRoute, Params } from '@angular/router';
import {Location} from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { Global } from '../../../../../../core/services/global';
import { User } from '../../../../../../models/user';
import { UserService } from '../../../../../../core/services/admin/user.service';
import { LocationService } from '../../../../../../core/services/admin/location.service';
import { Revision } from '../../../../../../models/revision';
import { RevisionService } from '../../../../../../core/services/client/revision.service';
import { SnackBarService } from '../../../../../../core/services/snack-bar.service';
import { DialogService } from '../../../../../../core/services/dialog.service';
import * as $ from 'jquery';

import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'sib-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss'],
  providers: [{
    provide: STEPPER_GLOBAL_OPTIONS, useValue: {showError: true}
  }]
})
export class StepperComponent implements OnInit {

  public isDate:boolean=false;
  public fecha:Date;
  public requestParams:any;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  public user: any;
  public revision:Revision;
  public location:any;
  public locationsUser:any;
  public address:string;
  public addressFull:string;
  public description:string;
  public failedConect:string;
  public message:string;
  public userID:string;
  public IdVarietyDetail:string;
  public turnText:string;
  public turns:any[];

  public dateRevision:any;
  public turnSelected:string="";
  public lenderId:string="1";
  public typeRevision:string="revision";

  constructor
  (
    private _userService: UserService,
    public _locationService: LocationService,
    public _revisionService: RevisionService,
    private snackBar: SnackBarService,
    private dialogService: DialogService,
    private _formBuilder: FormBuilder,
    private _route: ActivatedRoute,
    private _router: Router,
    private _location: Location,
    )
  {

    this.revision = new Revision();
    console.log(this.revision);
    this.turns= [
    {id:"morning",name:"Mañana"},
    {id:"afternoon",name:"Tarde"},
    ];

  }

  ngOnInit()
  {
    this.IdVarietyDetail= localStorage.getItem('IdVarietyDetail');

    this._route.params.subscribe
    (
      params =>
      {
        this.requestParams = JSON.parse(params.data);
        console.log(this.requestParams);
        this.userID= localStorage.getItem('resID');;
        this.getUser(this.userID);
        this.getLocationsUser(this.userID)
      }
      );

    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });

  }

  cambio(id){
    this.getLocation(id);
  }

  cambioturn(event){
    console.log(event);
    if(event=="morning")
    {
      this.turnText = "Mañana"
    }
    else
    {
      this.turnText = "Tarde";
    }
  }

  getLocation(id)
  {
    this._locationService.getOne(id).subscribe
    (
      response =>
      {
        console.log(response);
        this.location = response.location;
        this.addressFull = this.location.address;
        console.log(this.location);
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

  getUser(id)
  {
    this._userService.getOne(id).subscribe
    (
      response =>
      {
        this.user = response.user;
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

  getLocationsUser(id)
  {
    this._locationService.AllLocationUser(id).subscribe
    (
      response =>
      {
        if (response.status == true)
        {
          this.locationsUser = response.locations;
        }
        else
        {
          console.log(response);
        }
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

  onAddLocation()
  {
    this.dialogService.openAddLocationDialog().afterClosed().subscribe
    (
      response =>
      {
        this.location = response;
        console.log(this.location);
        this.createLocation(this.location);

      }
      );

  }

  createLocation(location)
  {
    this._locationService.create(location).subscribe
    (
      response =>
      {
        if(response.status==true)
        {
          console.log(response);
          this.message  = response.message.text;
          this.snackBar.openSnackBar(this.message,'');
          this.getLocationsUser(this.userID);
        }
      },
      error =>
      {
        console.log(error);
      }
      );
  }

  addEvent(type: string, event: MatDatepickerInputEvent<Date>) {
    this.isDate = true;
    console.log(this.isDate);
    this.fecha = event.value;
    console.log(this.fecha);
  }

  onConfirm(){
    this.dialogService.openConfirmDialog('Recuerde que primero se debe realizar una revision antes de abordar el servicio, ¿Desea continuar con su solicitud?').afterClosed().subscribe(res=>{
      if (res==true)
      {
        this.register();
      }
      else
      {
        console.log(res);
      }
    });
  }

  register()
  {
      this.revision.UserId = parseInt(this.userID);
      this.revision.VarietyDetailId = parseInt(this.IdVarietyDetail);
      this.revision.LocationId = parseInt(this.address);
      this.revision.description = this.description;
      
      this.revision.calendars = [
        {
          date:this.dateRevision,
          turn:this.turnSelected,
          LenderId:this.lenderId,
          type:this.typeRevision
        }];

      console.log(this.revision);

      this._revisionService.create(this.revision).subscribe
      (
        response =>
        {
          if (response.status==true)
          {
            console.log(response);
            this.message = response.message.text;
            this.messageSnackBar(this.message);
            setTimeout
            (
              () =>
              {
                this._router.navigate(['/auth/client/request']);
              },
              2000
            );
          }
          else
          {
            console.log(response);
            this.message = response.message.text;
            this.messageSnackBar(this.message);
          }
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
            console.log(error);
          }
        }
      );
  }


  selectedLender(){
    console.log("Elegido");
    /*$(document).ready(() => {
      $('#selectedLender-1').css({'background-color': 'yellow', 'font-size': '200%'});
    });*/
  }

  messageSnackBar(message)
  {
    this.snackBar.openSnackBarSuccess(message);
  }


  goBack()
  { 
    this._location.back(); 
  }
}

