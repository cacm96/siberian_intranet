import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import {Location} from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { Global } from '../../../../../../core/services/global';
import { Revision } from '../../../../../../models/revision';
import { RevisionService } from '../../../../../../core/services/client/revision.service';

@Component({
	selector: 'sib-requests',
	templateUrl: './requests.component.html',
	styleUrls: ['./requests.component.scss']
})
export class RequestsComponent implements OnInit {
	
	public revisions: any;
	public userID:string;
	public message: string;
	public failedConect: string;
	public revisionsRequested:any;
	public revisionsDiagnosticated:any;
	public revisionsApproved:any;
	public revisionsFinalized:any;
	public revisionsCancelled:any;

	constructor
	(
		private _revisionService: RevisionService,
		private _route: ActivatedRoute,
		private _location: Location
		) { }

	ngOnInit() {
		this.userID = localStorage.getItem('resID');
		this.getRevisions(this.userID);
	}

	getRevisions(userid)
	{
		this._revisionService.getRevisionUser(userid).subscribe
		(
			response =>
			{
				if (response.status==true)
				{
					this.revisions = response.revisions;

					this.revisionsRequested = this.revisions.filter(revision=>{return revision.status =="requested"});
					this.revisionsDiagnosticated = this.revisions.filter(revision=>{return revision.status =="diagnosticated"});
					this.revisionsApproved = this.revisions.filter(revision=>{return revision.status =="approved"});
					this.revisionsFinalized = this.revisions.filter(revision=>{return revision.status =="finalized"});
					this.revisionsCancelled = this.revisions.filter(revision=>{return revision.status =="cancelled"});
				} 
				else
				{
					this.revisions = [];
					this.message = response.message.text;
					console.log(this.message);
				}
				console.log(this.revisions);
			},
			error =>
			{
				console.log(<any>error);
				if (error instanceof HttpErrorResponse)
				{
					if (error.status === 0) {
						this.failedConect = Global.failed;
					}
				}
			}
			)
	}

	goBack()
	{ 
		this._location.back(); 
	}
}