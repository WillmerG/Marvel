import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'descrip'
})
export class DescripPipe implements PipeTransform {

  transform(value: string | null, size: number = 0): string {
    if (value !== null && value.trim().length > 0) {
      if (size > 0) {
        return value.substring(0, size);
      } else {
        return value;
      }
    } else {
      return 'Description Is Not Available';
    }
  }

}
