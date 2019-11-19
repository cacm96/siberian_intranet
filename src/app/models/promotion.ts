import { Parametro } from "./parametro";

export class Promotion{
	id:string;
	name:string;
	description:string;
	type:string;
	EquipinfraId:number;
	SubcategoryId:number;
	percentDiscount:number;
	dateStart:string;
	dateEnd:string;
  	status:string;
  	parameters: Array < Parametro > = new Array < Parametro >();
}
