import { Pipe, PipeTransform } from '@angular/core';
import { Like } from 'src/app/modules/conferencequestion/services/conferencequestion.service';

@Pipe({
  name: 'dislikes',
  standalone: true
})
export class DislikesPipe implements PipeTransform {

  transform(value: Like[]):number{
    return value.filter(item=>!item.possitive).length;
  }

}
