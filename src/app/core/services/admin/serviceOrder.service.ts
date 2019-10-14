import { Injectable } from '@angular/core';
import { HeaderService } from '../header.service';
import { HttpClient, HttpParams  } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { environment } from 'src/environments/environment';
import { ServiceOrder } from '../../../models/serviceOrder';


@Injectable()
export class ServiceOrderService extends HeaderService {

    url: string = environment.api + 'serviceOrder';


    constructor(
        private http: HttpClient
    ) {
        super();
    }

    create(serviceOrder: ServiceOrder): Observable<any> {
        let params = JSON.stringify(serviceOrder);
        return this.http.post(this.url, params, {headers: this.header});
    }

    All(): Observable<any>{
        return this.http.get(this.url, {headers: this.header});
    }

    getOne(id:Number): Observable<any>{
        return this.http.get(this.url+"/"+id, {headers: this.header});
    }

    update(serviceOrder:any): Observable<any>{
        let params = JSON.stringify(serviceOrder);
        return this.http.put(this.url+'/'+serviceOrder.id, params, {headers: this.header});
    }

    deleteOne(id): Observable<any>{
        return this.http.delete(this.url+'/'+id, {headers: this.header});
    }

}
