import { Component, Input } from '@angular/core';
import { Conferencereaction } from 'src/app/modules/conferencereaction/services/conferencereaction.service';

@Component({
  selector: 'app-attendee-reactions',
  templateUrl: './attendee-reactions.component.html',
  styleUrl: './attendee-reactions.component.scss'
})
export class AttendeeReactionsComponent {
  @Input() reactions:Conferencereaction[]

  isCollapsed:boolean=false
}
