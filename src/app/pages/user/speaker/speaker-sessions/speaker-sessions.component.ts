import { Component, Input } from '@angular/core';
import { Conferencesession } from 'src/app/modules/conferencesession/services/conferencesession.service';

@Component({
  selector: 'app-speaker-sessions',
  templateUrl: './speaker-sessions.component.html',
  styleUrl: './speaker-sessions.component.scss'
})
export class SpeakerSessionsComponent {
  @Input() sessions:Conferencesession[]
}
