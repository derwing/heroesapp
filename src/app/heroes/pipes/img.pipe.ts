import { Heroe } from './../interfaces/heroes.interface';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'img'
})
export class ImgPipe implements PipeTransform {
  heroeImg: string = '';

  transform(heroe: Heroe): string {
    if (heroe.id) {
      this.heroeImg = `./assets/heroes/${heroe.id}.jpg`;
    }
    return this.heroeImg;

  }

}
