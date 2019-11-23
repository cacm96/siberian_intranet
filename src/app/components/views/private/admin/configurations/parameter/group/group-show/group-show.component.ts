import { Component, OnInit, ViewChild } from "@angular/core";
import { Router, ActivatedRoute, Params } from "@angular/router";
import { Location } from "@angular/common";
import { HttpErrorResponse } from "@angular/common/http";
import { Global } from "../../../../../../../../core/services/global";
import { Group } from "../../../../../../../../models/group";
import { GroupService } from "../../../../../../../../core/services/admin/group.service";
import { SnackBarService } from "../../../../../../../../core/services/snack-bar.service";

import { MatPaginator } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";
import { MatTableDataSource } from "@angular/material/table";

@Component({
  selector: "sib-group-show",
  templateUrl: "./group-show.component.html",
  styleUrls: ["./group-show.component.scss"]
})
export class GroupShowComponent implements OnInit {
  
  public group: Group;
  public arrayGroup: any;
  public message: string;
  public failedConect: string;

  displayedColumns: string[] = [
    "name",
    "description",
    "parameters",
    "status"
  ];

  dataSource: MatTableDataSource<Group>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private _groupService: GroupService,
    private _route: ActivatedRoute,
    private _router: Router,
    private _location: Location,
    private snackBar: SnackBarService
  ) {}

  ngOnInit() {
    this._route.params.subscribe(params => {
      let id = params.id;
      this.getGroups(id);
    });
  }

  getGroups(id) {
    this._groupService.getOne(id).subscribe(
      response => {
        this.group = response.group;
        this.arrayGroup = [];
        this.arrayGroup.push(this.group);
        console.log(this.arrayGroup);

        this.table();
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

  table() {
    this.dataSource = new MatTableDataSource(this.arrayGroup);
  }

  goBack() {
    this._location.back();
  }
}
