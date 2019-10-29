import { Revision } from './revision';
import { ServiceOrderDetail } from './serviceOrderDetail';

export class ServiceOrder {
    id: string;
    warrantyTime: string;
    amount: number;
    status: string;
    revision: Array < Revision > = new Array < Revision >();
    serviceOrderDetails: Array < ServiceOrderDetail > = new Array < ServiceOrderDetail >();
}
