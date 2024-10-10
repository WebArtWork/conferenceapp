import { Component, Input } from '@angular/core';
import { Conferencelink } from 'src/app/modules/conferencelink/services/conferencelink.service';

@Component({
  selector: 'app-attendee-links',
  templateUrl: './attendee-links.component.html',
  styleUrl: './attendee-links.component.scss'
})
export class AttendeeLinksComponent {
  @Input() links:Conferencelink[]

  isCollapsed:boolean=false
}
