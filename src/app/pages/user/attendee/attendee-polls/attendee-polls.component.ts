import { Component, Input } from '@angular/core';
import { Conferencepoll } from 'src/app/modules/conferencepoll/services/conferencepoll.service';

@Component({
  selector: 'app-attendee-polls',
  templateUrl: './attendee-polls.component.html',
  styleUrl: './attendee-polls.component.scss'
})
export class AttendeePollsComponent {
  @Input() polls:Conferencepoll[]

  isCollapsed:boolean=false
}
