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
import { SnackBarService } from '../../../../../../core/services/snack-bar.service';
import { DialogService } from '../../../../../../core/services/dialog.service';

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
  public location:any;
  public locationsUser:any;
  public address:string;
  public description:string;
  public failedConect:string;
  public message:string;
  public userID:string;

  constructor
  (
    private _userService: UserService,
    public _locationService: LocationService,
    private snackBar: SnackBarService,
    private dialogService: DialogService,
    private _formBuilder: FormBuilder,
    private _route: ActivatedRoute,
    private _router: Router,
    private _location: Location,
  )
  {

  }

  ngOnInit()
  {

    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });

    this._route.params.subscribe
    (
      params =>
      {
        this.requestParams = JSON.parse(params.data);
        this.userID= localStorage.getItem('resID');;
        this.getUser(this.userID);
        this.getLocationsUser(this.userID)
      }
    );

  }

  getUser(id)
  {
    this._userService.getOne(id).subscribe
    (
      response =>
      {
        this.user = response.user;
        console.log(this.user);
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
          console.log(this.locationsUser);
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

  goBack()
  { 
    this._location.back(); 
  }
}
