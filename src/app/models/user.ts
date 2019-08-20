import { Location } from "./location";
import { Phone } from "./phone";
import { Role } from "./role";

export class User{
	id: string;
	email: string;
	password: string;
	firstName:string;
	lastName:string;
	dniType:string;
	dni:string;
	gender:string;
	date_of_birth:string;
	img_url:string;
	note:string;
	status:string;
	create_at:string;
	update_at:string;
	roles: Array < Role > = new Array < Role >();
	locations: Array < Location > = new Array < Location >();
	phones: Array < Phone > = new Array < Phone >();
}