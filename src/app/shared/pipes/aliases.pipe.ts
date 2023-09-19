import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'aliases',
  standalone: true
})
export class AliasesPipe implements PipeTransform {

  transform(aliases: string[]): string {
    if (!aliases?.length) {
      return '';
    }
    return aliases.join(' / ');
  }

}
