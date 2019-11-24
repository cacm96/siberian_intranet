import { Component, OnInit, } from '@angular/core';
import { DialogService } from 'src/app/core/services/dialog.service';
import { SnackBarService } from 'src/app/core/services/snack-bar.service';

import { Router, ActivatedRoute, Params } from '@angular/router';
import {Location} from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { Global } from 'src/app/core/services/global';
import { Question } from 'src/app/models/question';
import { QuestionService } from 'src/app/core/services/admin/question.service';


@Component({
  selector: 'sib-add-calification-dialog',
  templateUrl: './add-calification-dialog.component.html',
  styleUrls: ['./add-calification-dialog.component.scss']
})
export class AddCalificationDialogComponent implements OnInit {

  public questions:any;
  public message:string;
  public failedConect:string;

  constructor
  (
    private dialogService: DialogService,
    private snackBar: SnackBarService,
    private _questionService: QuestionService,
    private _route: ActivatedRoute,
    private _router: Router,
    private _location: Location
  )
  {
    
  }

  ngOnInit()
  {
    this.getQuestions();
  }

  getQuestions()
  {
    this._questionService.All().subscribe
    (
      response =>
      {
        if (response.status==true)
        {
          this.questions = response.question;
          console.log(this.questions);
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

 
  
}
