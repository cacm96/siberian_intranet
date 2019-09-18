import { Injectable } from '@angular/core';
import { HeaderService } from '../header.service';
import { HttpClient, HttpParams  } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { environment } from 'src/environments/environment';
import { Revision } from '../../../models/revision';

@Injectable()
export class RevisionService extends HeaderService{

	url: string = environment.api + 'revision';

	constructor(
		private http: HttpClient
	){
		super();
	}

    create(revision: Revision): Observable<any>{
		let params = JSON.stringify(revision);
		return this.http.post(this.url, params, {headers: this.header});
	}

	update(revision:any): Observable<any>{
		let params = JSON.stringify(revision);
		return this.http.put(this.url+'/'+revision.id, params, {headers: this.header});
	}

	approve(id): Observable<any>{
		return this.http.put(this.url+'/'+id+'/approve', {}, {headers: this.header});
	}

	diagnose(id): Observable<any>{
		return this.http.put(this.url+'/'+id+'/diagnose', {}, {headers: this.header});
	}

	reject(id): Observable<any>{
		return this.http.put(this.url+'/'+id+'/reject', {}, {headers: this.header});
	}

	All(): Observable<any>{
		return this.http.get(this.url, {headers: this.header});
	}

	getOne(id:Number): Observable<any>{
		return this.http.get(this.url+"/"+id, {headers: this.header});
	}

	deleteOne(id): Observable<any>{
		return this.http.delete(this.url+'/'+id, {headers: this.header});
	}


}
