import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

import { Router, ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { Global } from '../../../../../../../../core/services/global';
import { ServiceDetail } from '../../../../../../../../models/serviceDetail';
import { ServiceDetailService } from '../../../../../../../../core/services/admin/serviceDetail.service';

import { Activity } from '../../../../../../../../models/activity';
import { Policy } from '../../../../../../../../models/policy';
import { Resource } from '../../../../../../../../models/resource';
import { Skill } from '../../../../../../../../models/skill';

import { SnackBarService } from '../../../../../../../../core/services/snack-bar.service';
import { DialogService } from '../../../../../../../../core/services/dialog.service';


@Component({
	selector: 'sib-service-detail-show',
	templateUrl: './service-detail-show.component.html',
	styleUrls: ['./service-detail-show.component.scss']
})
export class ServiceDetailShowComponent implements OnInit {

	public serviceDetail: ServiceDetail;
	public activities: Array<Activity> = new Array<Activity>();
	public policies: Array<Policy> = new Array<Policy>();
	public resources: Array<Resource> = new Array<Resource>();
	public skills: Array<Skill> = new Array<Skill>();

	public message: string;
	public failedConect: string;

	displayedColumnsActivity: string[] = ['id', 'name', 'description', 'estimatedTime','difficultyDegree','status', 'delete'];
	dataSourceActivity: MatTableDataSource<Activity>;

	displayedColumnsPolicy: string[] = ['id', 'name', 'description', 'actionPlan', 'status', 'delete'];
	dataSourcePolicy: MatTableDataSource<Policy>;

	displayedColumnsResource: string[] = ['id', 'name', 'description', 'resourceType','measureUnit','price','status', 'delete'];
	dataSourceResource: MatTableDataSource<Resource>;

	displayedColumnsSkill: string[] = ['id', 'name', 'description', 'status', 'delete'];
	dataSourceSkill: MatTableDataSource<Skill>;

	@ViewChild(MatPaginator) paginator: MatPaginator;
	@ViewChild(MatSort) sort: MatSort;

	constructor(
		private _serviceDetailService: ServiceDetailService,
		private _route: ActivatedRoute,
		private _router: Router,
		private _location: Location,
		private snackBar: SnackBarService
	) { }

	ngOnInit() {
		this._route.params.subscribe
			(
				params => {
					let id = params.id;
					this.getServiceDetails(id);
				}
			);
	}

	getServiceDetails(id) {
		this._serviceDetailService.getOne(id).subscribe
			(
				response => {
					if(response.status==true){
						this.serviceDetail = response.serviceDetail;
						this.activities = response.serviceDetail.activities;
						this.policies = response.serviceDetail.policies;
						this.resources = response.serviceDetail.resources;
						this.skills = response.serviceDetail.skills;
						console.log(this.serviceDetail);
					}
					else{
						this.activities = [];
						this.policies = [];
						this.resources = [];
						this.skills = [];
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

	applyFilterActivity(entity: string, filterValue: string)
	{
		this.dataSourceActivity.filter = filterValue.trim().toLowerCase();

		if (this.dataSourceActivity.paginator) {
			this.dataSourceActivity.paginator.firstPage();
		}
	}

	applyFilterPolicy(entity: string, filterValue: string)
	{
		this.dataSourcePolicy.filter = filterValue.trim().toLowerCase();

		if (this.dataSourcePolicy.paginator) {
			this.dataSourcePolicy.paginator.firstPage();
		}
	}

	applyFilterResource(entity: string, filterValue: string)
	{
		this.dataSourceResource.filter = filterValue.trim().toLowerCase();

		if (this.dataSourceResource.paginator) {
			this.dataSourceResource.paginator.firstPage();
		}
	}

	applyFilterSkill(entity: string, filterValue: string)
	{
		this.dataSourceSkill.filter = filterValue.trim().toLowerCase();

		if (this.dataSourceSkill.paginator) {
			this.dataSourceSkill.paginator.firstPage();
		}
	}

	tableActivity()
	{
		this.dataSourceActivity = new MatTableDataSource(this.activities);
		this.dataSourceActivity.paginator = this.paginator;
		this.dataSourceActivity.sort = this.sort;
	}

	tablePolicy()
	{
		this.dataSourcePolicy = new MatTableDataSource(this.policies);
		this.dataSourcePolicy.paginator = this.paginator;
		this.dataSourcePolicy.sort = this.sort;
	}

	tableResource()
	{
		this.dataSourceResource = new MatTableDataSource(this.resources);
		this.dataSourceResource.paginator = this.paginator;
		this.dataSourceResource.sort = this.sort;
	}

	tableSkill()
	{
		this.dataSourceSkill = new MatTableDataSource(this.skills);
		this.dataSourceSkill.paginator = this.paginator;
		this.dataSourceSkill.sort = this.sort;
	}


	goBack() {
		this._location.back();
	}
}
