import { Injectable } from '@angular/core';
import { HeaderService } from '../header.service';
import { HttpClient, HttpParams  } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { environment } from 'src/environments/environment';
import { ServiceOrderDetail } from '../../../models/serviceOrderDetail';


@Injectable()
export class ServiceOrderDetailService extends HeaderService {

    url: string = environment.api + 'serviceOrderDetail';


    constructor(
        private http: HttpClient
    ) {
        super();
    }

    create(serviceOrderDetail: ServiceOrderDetail): Observable<any> {
        let params = JSON.stringify(serviceOrderDetail);
        return this.http.post(this.url, params, {headers: this.header});
    }

    All(): Observable<any> {
        return this.http.get(this.url, {headers: this.header});
    }

    getOne(id:Number): Observable<any> {
        return this.http.get(this.url+"/"+id, {headers: this.header});
    }

    update(serviceOrderDetail: any): Observable<any> {
        let params = JSON.stringify(serviceOrderDetail);
        return this.http.put(this.url+'/'+serviceOrderDetail.id, params, {headers: this.header});
    }

    deleteOne(id): Observable<any> {
        return this.http.delete(this.url+'/'+id, {headers: this.header});
    }

}
