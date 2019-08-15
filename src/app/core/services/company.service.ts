import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Company } from '../../models/company';
import { Global } from './global';

@Injectable()
export class CompanyService{
	public url:string;

	constructor(
		private _http: HttpClient
	){
		this.url = Global.url;
	}

	getCompany(): Observable<any>{
		let headers = new HttpHeaders().set('Content-Type', 'application/json');

		return this._http.get(this.url+'company', {headers: headers});
	}

	updateCompany(company): Observable<any>{
		let params = JSON.stringify(company);
		let headers = new HttpHeaders().set('Content-Type', 'application/json');

		return this._http.put(this.url+'company', params, {headers: headers});
	}

}