import { Component, Input } from '@angular/core';
import { Conferencelink } from 'src/app/modules/conferencelink/services/conferencelink.service';

@Component({
  selector: 'app-attendee-qnas',
  templateUrl: './attendee-qnas.component.html',
  styleUrl: './attendee-qnas.component.scss'
})
export class AttendeeQnasComponent {
  @Input() qnas:Conferencelink[]

  isCollapsed:boolean=false
}
