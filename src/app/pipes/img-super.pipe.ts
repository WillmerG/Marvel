import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'imgSuper'
})
export class ImgSuperPipe implements PipeTransform {

  transform(value: string, extension: string): string {

    if (value && extension) {
      return `${value}/portrait_xlarge.${extension}`;
    } else {
      return './assets/descarga.png';
    }
  }
}
