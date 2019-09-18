import { Revision } from './revision';
import { ServiceOrderDetail } from './serviceOrderDetail';

export class ServiceOrder {
    id: string;
    code: string;
    amount: number;
    status: string;
    warrantyTime: string;
   // revision: any;
   // serviceOrderDetails: any;
    revision: Array < Revision > = new Array < Revision >();
    serviceOrderDetails: Array < ServiceOrderDetail > = new Array < ServiceOrderDetail >();
}
