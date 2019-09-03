import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper'
import {MatDatepickerInputEvent} from '@angular/material/datepicker';

import { Router, ActivatedRoute, Params } from '@angular/router';
import {Location} from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { Global } from '../../../../../../core/services/global';
//import { CatalogueService } from '../../../../../../core/services/client/catalogue.service';

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

  constructor
  (
    private _formBuilder: FormBuilder,
    //private _catalogueService: CatalogueService,
    private _route: ActivatedRoute,
    private _router: Router,
    private _location: Location

    )
  {

  }

  ngOnInit() {
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
        this.requestParams = params;
        console.log(this.requestParams);
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
