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
					console.log(this.revisions);
				} 
				else
				{
					this.revisions = [];
					this.message = response.message.text;
					console.log(this.message);
				}
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
}