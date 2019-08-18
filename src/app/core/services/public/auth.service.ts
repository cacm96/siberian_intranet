import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';
import { User } from '../../../models/user';
import { Global } from '../global';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Injectable({
	providedIn: 'root'
})
export class AuthService{
	public url:string;

	constructor
	(
		private _http: HttpClient,
		private _router: Router,
	)
	{
		this.url = Global.url;
	}

	login(email:string, password:string): Observable<any>
	{
	    return this._http.post(this.url+'signin', { email: email, password: password });     
	}

	getToken() {
		return localStorage.getItem('token');
	}

	getRoleID() {
		return localStorage.getItem('roleID');
	}

	getID() {
		return localStorage.getItem('resID');
	}

	logoutUserToken() {
		return localStorage.removeItem('token');
	}
	logoutUserID() {
		return localStorage.removeItem('resID');
	}
	logoutClear() {
		return localStorage.clear();
	}
	loggedIn() {
    	return !!localStorage.getItem('token')    
  	}
 
}