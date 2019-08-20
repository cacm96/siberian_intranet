import { Injectable } from '@angular/core';
import { HeaderService } from '../header.service';
import { HttpClient, HttpParams  } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { environment } from 'src/environments/environment';
import { Role } from '../../../models/role';


@Injectable()
export class RoleService extends HeaderService{

	url: string = environment.api + 'role';


	constructor(
		private http: HttpClient
	){
		super();
	}

	create(role: Role): Observable<any>{
		let params = JSON.stringify(role);
		return this.http.post(this.url, params, {headers: this.header});
	}

    All(): Observable<any>{
		return this.http.get(this.url, {headers: this.header});
	}

	One(id:Number): Observable<any>{
		return this.http.get(this.url+"/"+id, {headers: this.header});
	}

    update(role:any): Observable<any>{
		let params = JSON.stringify(role);
		return this.http.put(this.url, params, {headers: this.header});
	}

	deleteAll(): Observable<any>{
		return this.http.delete(this.url, {headers: this.header});
	}

	deleteOne(id): Observable<any>{
		return this.http.delete(this.url+'role/'+id, {headers: this.header});
	}

}
