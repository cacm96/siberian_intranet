import { Injectable } from '@angular/core';
import { HeaderService } from '../header.service';
import { HttpClient, HttpParams  } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { environment } from 'src/environments/environment';
import { User } from '../../../models/user';


@Injectable()
export class UserService extends HeaderService{

	url: string = environment.api + 'user';


	constructor(
		private http: HttpClient
	){
		super();
	}

	create(user: User): Observable<any>{
		let params = JSON.stringify(user);
		return this.http.post(this.url, params, {headers: this.header});
	}

    getAll(): Observable<any>{
		return this.http.get(this.url, {headers: this.header});
	}

	getActives(): Observable<any>{
		return this.http.get(this.url+'/status/active', {headers: this.header});
	}

	getInactives(): Observable<any>{
		return this.http.get(this.url+'/status/inactive', {headers: this.header});
	}

	getOne(id:Number): Observable<any>{
		return this.http.get(this.url+'/'+id, {headers: this.header});
	}

    update(user:any): Observable<any>{
		let params = JSON.stringify(user);
		return this.http.put(this.url+'/'+user.id, params, {headers: this.header});
	}

	getUsersExcept(id): Observable<any>{
		return this.http.get(this.url+'user/except/'+id, {headers: this.header});
	}

	deleteAll(): Observable<any>{
		return this.http.delete(this.url, {headers: this.header});
	}

	deleteUser(id): Observable<any>{
		return this.http.delete(this.url+'/'+id, {headers: this.header});
	}

}
