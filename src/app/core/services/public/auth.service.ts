import { Injectable } from '@angular/core';
import { HeaderService } from '../header.service';
import { HttpClient, HttpParams  } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { environment } from 'src/environments/environment';
import { User } from '../../../models/user';

@Injectable()
export class AuthService extends HeaderService{
	urlLogin: string = environment.api + 'user/login';
	urlRegister: string = environment.api + 'user/register';

	constructor(
		private http: HttpClient
	){
		super();
	}



	login(email:string, password:string): Observable<any>
	{
	    return this.http.post(this.urlLogin, { email: email, password: password });     
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