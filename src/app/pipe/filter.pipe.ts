import { Pipe, PipeTransform } from '@angular/core';
import { EmployeeData } from '../data/data/data.component';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, key: string, ...args: any) {
    if (!args[0] || args == '') {
      return value;
    } else if (value) {
      return value.filter((item: any) => {
        if ((item[key].indexOf(args[0]) !== -1)|| (item[key] as string).toLowerCase().indexOf(args[0].toLowerCase()) !== -1) {
            return true;
        } else{
          return false;
        }
      });
    }
  }

}
