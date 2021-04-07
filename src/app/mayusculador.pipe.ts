import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mayusculador'
})
export class MayusculadorPipe implements PipeTransform {

  transform(value: string, ...args: ('todo' | 'primera')[]): string {
    if (args.length === 1) {
      switch (args[0]) {
        case 'todo': return value.toUpperCase();
        case 'primera': return value[0].toUpperCase() + value.slice(1);
        default: return 'ARGUMENTO NO RECONOCIDO';
      }
    } else {
      return value.toUpperCase();
    }

  }
}
