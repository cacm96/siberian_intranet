import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper'
import {MatDatepickerInputEvent} from '@angular/material/datepicker';

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
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }

  addEvent(type: string, event: MatDatepickerInputEvent<Date>) {
    this.isDate = true;
    console.log(this.isDate);
    this.fecha = event.value;
    console.log(this.fecha);
  }
}
