import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchUser'
})
export class SearchUserPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    const resultUser = [];
    for (const users of value)
    {
    	if(users.email.toLowerCase().indexOf(arg.toLowerCase()) >-1)
    	{
    		resultUser.push(users);
    	}
    }
   	return resultUser;
  }

}
