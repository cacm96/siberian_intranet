import { Component, OnInit, Inject} from '@angular/core';
import { QuestionService } from '../../../../app/core/services/admin/question.service';

import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Router, ActivatedRoute, Params } from '@angular/router';
import {Location} from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { Global } from 'src/app/core/services/global';
import { SnackBarService } from 'src/app/core/services/snack-bar.service';


@Component({
  selector: 'sib-add-calification-dialog',
  templateUrl: './add-calification-dialog.component.html',
  styleUrls: ['./add-calification-dialog.component.scss']
})
export class AddCalificationDialogComponent implements OnInit {
  public question:any;
  public message:string;
  public failedConect:string;
  public isQuestion:boolean= false;

  constructor
  (
    @Inject(MAT_DIALOG_DATA) public data,
    public dialogRef: MatDialogRef<AddCalificationDialogComponent>,
    private _questionService: QuestionService,
    private _route: ActivatedRoute,
    private _router: Router,
    private _location: Location,
    private snackBar: SnackBarService,
  ) { }


  ngOnInit() {
  }

  getQuestion(event)
  {
    this._questionService.All().subscribe
    (
      response =>
      {
        if (response.status==true)
        {
          this.question = response.question;
          console.log(this.question);
        }
        else
        {
          this.question = [];
          this.message = response.message.text;
          console.log(this.message);
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

  changeQuestion(event)
  {
    console.log(event)

  }

}
