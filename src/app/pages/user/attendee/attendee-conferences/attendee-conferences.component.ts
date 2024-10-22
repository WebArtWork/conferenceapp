import { Component, Input } from '@angular/core';
import { Conference } from 'src/app/modules/conference/services/conference.service';

@Component({
  selector: 'app-attendee-conferences',
  templateUrl: './attendee-conferences.component.html',
  styleUrl: './attendee-conferences.component.scss'
})
export class AttendeeConferencesComponent {
 @Input() conferences:Conference[]

 isCollapsed:boolean=false

}
