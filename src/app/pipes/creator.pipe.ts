import { Pipe, PipeTransform } from '@angular/core';
import { IComicCreatorsItem } from './../interfaces/comics.interface';

@Pipe({
  name: 'creator'
})
export class CreatorPipe implements PipeTransform {

  transform(value: IComicCreatorsItem[], tipo: string): unknown {
    const auxValue = value.filter(x => x.role === tipo);

    if (auxValue.length > 0) {
      return auxValue[0].name;
    } else {
      return 'no available';
    }
  }

}
