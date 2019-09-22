import { User } from './user';
import { VarietyDetail } from './varietyDetail';
import { Location } from './location';

export class Revision {
    id: string;
    description: string;
    price: number;
    status: string;
    user: Array < User > = new Array < User >();
    varietyDetail: Array < VarietyDetail > = new Array < VarietyDetail >();
    location: Array < Location > = new Array < Location >();
}
