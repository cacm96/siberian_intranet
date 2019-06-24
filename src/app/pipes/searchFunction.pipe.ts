import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchFunction'
})
export class SearchFunctionPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    const resultFunction = [];
    for (const functions of value)
    {
    	if(functions.name.toLowerCase().indexOf(arg.toLowerCase()) >-1)
    	{
    		resultFunction.push(functions);
    	}
    }
   	return resultFunction;
  }

}
