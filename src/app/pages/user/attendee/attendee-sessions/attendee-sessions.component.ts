import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Conferencesession } from 'src/app/modules/conferencesession/services/conferencesession.service';
import { Conferencelink } from 'src/app/modules/conferencelink/services/conferencelink.service';
import { Conferencemessage } from 'src/app/modules/conferencemessage/services/conferencemessage.service';
import { Conferencepoll } from 'src/app/modules/conferencepoll/services/conferencepoll.service';
import { Conferenceqna } from 'src/app/modules/conferenceqna/services/conferenceqna.service';
import { Conferencequestion } from 'src/app/modules/conferencequestion/services/conferencequestion.service';

@Component({
  selector: 'app-attendee-sessions',
  templateUrl: './attendee-sessions.component.html',
  styleUrl: './attendee-sessions.component.scss'
})
export class AttendeeSessionsComponent {
  @Input() sessions:Conferencesession[]
  @Output() sessionEvent=new EventEmitter<string>()
  // @Input() messages:Conferencemessage[]
  // @Input() questions:Conferencequestion[]
  // @Input() qnas:Conferenceqna[]
  // @Input() links:Conferencelink[]
  // @Input() polls:Conferencepoll[]

  isCollapsed:boolean=false 
}
