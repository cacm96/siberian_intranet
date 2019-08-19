import { Injectable } from '@angular/core';
import { HeaderService } from '../header.service';
import { HttpClient, HttpParams  } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { environment } from 'src/environments/environment';
import { Company } from '../../../models/company';

@Injectable()
export class CompanyService extends HeaderService{

	url: string = environment.api + 'company';


	constructor(
		private http: HttpClient
	){
		super();
	}

	getAll(): Observable < Array < Company > > {
        return this.http.get < Array < Company > > (this.url, {
            headers: this.header
        });
    }

    update(company:any): Observable < any > {
        return this.http.put < any > (this.url, {
            company
        }, {
            headers: this.header,
        });
    }


}