import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'bookName'
})
export class BookNamePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
