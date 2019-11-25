import { Component, OnInit, ViewChild } from "@angular/core";
import { MatPaginator } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";
import { MatTableDataSource } from "@angular/material/table";
import { DialogService } from "../../../../../../../../core/services/dialog.service";
import { SnackBarService } from "../../../../../../../../core/services/snack-bar.service";

import { Router, ActivatedRoute, Params } from "@angular/router";
import { Location } from "@angular/common";
import { HttpErrorResponse } from "@angular/common/http";
import { Global } from "../../../../../../../../core/services/global";
import { Question } from "../../../../../../../../models/question";
import { QuestionService } from "../../../../../../../../core/services/admin/question.service";

@Component({
  selector: "sib-questions",
  templateUrl: "./questions.component.html",
  styleUrls: ["./questions.component.scss"]
})
export class QuestionsComponent implements OnInit {
  public questions: Array<Question> = new Array<Question>();
  public message: string;
  public failedConect: string;

  public auxQuestion: any;
  public auxQuestions: Array<Question> = new Array<Question>();

  displayedColumns: string[] = [
    "id",
    "enquire",
    "description",
    "status",
    "edit",
    "delete"
  ];
  dataSource: MatTableDataSource<Question>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private dialogService: DialogService,
    private snackBar: SnackBarService,
    private _questionService: QuestionService,
    private _route: ActivatedRoute,
    private _router: Router,
    private _location: Location
  ) {
    this.auxQuestions = [];
  }

  ngOnInit() {
    this.getQuestions();
  }

  getQuestions() {
    this._questionService.All().subscribe(
      response => {
        if (response.status == true) {
          console.log('response');
          console.log(response);

          console.log("bandera 1");
          console.log((new Date(response.questions[0].createdAt)).getTime());
          console.log(new Date(response.questions[0].createdAt));
          console.log(new Date(response.questions[0].updatedAt))

          console.log("bandera 2");
          
          /*for ( let quest of response.questions) {
            quest.createdAt = new Date(quest.createdAt * 1000);
            quest.updatedAt = new Date(quest.updatedAt * 1000);
            this.auxQuestions.push(quest);
          }
          console.log(this.auxQuestions);
          */

         console.log(response);

         this.questions = response.questions;
         console.log(this.questions);

          this.table();
        } else {
          this.questions = [];
          this.message = response.message.text;
          console.log(this.message);
          this.table();
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
    );
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  table() {
    //this.sortItem();
    this.questions = this.snackBar.orderByDateAsc(this.questions);
    this.dataSource = new MatTableDataSource(this.questions);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  onDelete(id) {
    this.dialogService
      .openConfirmDialog("¿Estás seguro de eliminar esta pregunta?")
      .afterClosed()
      .subscribe(response => {
        if (response == true) {
          this.deleteQuestion(id);
        } else {
          console.log(response);
        }
      });
  }

  deleteQuestion(id) {
    this._questionService.deleteOne(id).subscribe(
      response => {
        console.log(response);
        this.message = response.message.text;
        this.snackBar.openSnackBarSuccess(this.message);
        this.getQuestions();
      },
      error => {
        console.log(<any>error);
      }
    );
  }

  sortItem() {
    this.questions.sort(
      function(a,b){
        a.updatedAt = new Date(a.updatedAt);
        b.updatedAt = new Date(b.updatedAt);
        return a.updatedAt.getTime() < b.updatedAt.getTime() ? 1 : -1; 
      });
  }
}
