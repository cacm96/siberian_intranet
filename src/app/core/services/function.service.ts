import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Function } from '../../models/function';
import { Global } from './global';

@Injectable()
export class FunctionService{
	public url:string;

	constructor(
		private _http: HttpClient
	){
		this.url = Global.url;
	}

	saveFunction(funcion: Function): Observable<any>{
		let params = JSON.stringify(funcion);
		let headers = new HttpHeaders().set('Content-Type','application/json');

		return this._http.post(this.url+'saveFunction', params, {headers: headers});
	}

	getFunctions(): Observable<any>{
		let headers = new HttpHeaders().set('Content-Type', 'application/json');

		return this._http.get(this.url+'functions', {headers: headers});
	}

	getFunction(id): Observable<any>{
		let headers = new HttpHeaders().set('Content-Type', 'application/json');

		return this._http.get(this.url+'function/'+id, {headers: headers});
	}

	deleteFunction(id): Observable<any>{
		let headers = new HttpHeaders().set('Content-Type', 'application/json');

		return this._http.delete(this.url+'function/'+id, {headers: headers});
	}

	deleteFunctions(): Observable<any>{
		let headers = new HttpHeaders().set('Content-Type', 'application/json');

		return this._http.get(this.url+'deleteFunctions', {headers: headers});
	}

	updateFunction(funcion): Observable<any>{
		let params = JSON.stringify(funcion);
		let headers = new HttpHeaders().set('Content-Type', 'application/json');

		return this._http.put(this.url+'function/'+funcion._id, params, {headers: headers});
	}

}