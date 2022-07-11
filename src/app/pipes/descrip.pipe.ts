import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'descrip'
})
export class DescripPipe implements PipeTransform {

  transform(value: string): string {
    if (value.length > 0) {
      return value;
    } else {
      return 'Description Is Not Available';
    }
  }

}
