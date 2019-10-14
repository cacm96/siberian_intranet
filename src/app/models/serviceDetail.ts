import { Activity } from "./activity";
import { Resource } from "./resource";
import { Policy } from "./policy";

export class ServiceDetail{
    id: string;
    name: string;
    estimatedPrice: string;
    estimatedWarrantyTime: string;
    note: string;
    status: string;
    ComponentId: string;
    serviceType: string;
    activities: Array < Activity > = new Array < Activity >();
    resources: Array < Resource > = new Array < Resource >();
    policies: Array < Policy > = new Array < Policy >();
}
