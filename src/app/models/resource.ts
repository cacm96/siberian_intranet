//import { Subcategory } from "./subcategory";

export class Resource{
	id:string;
  	name: string;
  	description:string;
  	resourceType:string;
  	measureUnit:string;
  	price:string;
  	status:string;
  	quantity:string;
  	//serviceDetails: Array < Subcategory > = new Array < Subcategory >();
    createdAt:Date;
  	updatedAt:Date;
}
