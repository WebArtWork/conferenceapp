import { Pipe, PipeTransform } from '@angular/core';
import { Like } from 'src/app/modules/conferencequestion/services/conferencequestion.service';

@Pipe({
  name: 'likes',
  standalone: true
})
export class LikesPipe implements PipeTransform {

  transform(value: Like[]):number{
    return value.filter(item=>item.possitive).length;
  }

}
