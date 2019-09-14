import { Component } from './component';
// import { Activities } from "./activities";
// import { Resources } from "./resources";
// import { Policies } from "./policies";

export class ServiceDetail {
    id: string;
    name: string;
    estimatedPrice: number;
    estimatedWarrantyTime: string;
    note: string;
    status: string;
    Component: Array < Component > = new Array < Component >();
    // activities: Array < Activities > = new Array < Activities >();
    // resources: Array < Resources > = new Array < Resources >();
    // policies: Array < Policies > = new Array < Policies >();
}
